const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = process.env.DB;
const fs = require("fs");
const { parse } = require("path");
require("./cardSchema");
require("./decksSchema");
const Card = mongoose.model("Card");
const Deck = mongoose.model("Decks");
mongoose.connect(mongoDB);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/data", async (req, res) => {
  const jsonData = await Card.find().sort({ id: 1 });
  saveJson(jsonData, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(jsonData);
});

function saveJson(data, callback) {
  fs.writeFile("./data.json", JSON.stringify(data), callback);
}

app.get("/api/filter", async (req, res) => {
  try {
    const { pack, type, cost, charge, time, attribute, night, day, name } =
      req.query;
    console.log(req.query);
    let query = {};
    if (pack) {
      query.pack = pack;
    }
    if (type) {
      query.type = type;
    }
    if (cost) {
      query["element.cost"] = parseInt(cost);
    }
    if (charge) {
      query["element.charge"] = parseInt(charge);
    }
    if (time) {
      query["element.time"] = parseInt(time);
    }
    if (attribute) {
      query["element.attribute"] = attribute;
    }
    if (night) {
      query["element.night"] = parseInt(night);
    }
    if (day) {
      query["element.day"] = parseInt(day);
    }
    if (name) {
      Card.collection.createIndex({ name: "text" });
      query.$text = { $search: name };
    }
    if(parseInt(cost) == 6){
      const jsonData = await Card.find({ "element.cost": { $gte: 6 } }).sort({ id: 1 });
      res.json(jsonData);
    }
    else if(parseInt(day) == 120){
      const jsonData = await Card.find({ "element.day": { $gte: 120 } }).sort({ id: 1 });
      res.json(jsonData);
    }
    else if(parseInt(night) == 120){
      const jsonData = await Card.find({ "element.night": { $gte: 120 } }).sort({ id: 1 });
      res.json(jsonData);
    }
    else{
    const jsonData = await Card.find(query).sort({ id: 1 });
    res.json(jsonData);
    }
  } catch (error) {
    console.error("過濾卡片失敗:", error);
    res.status(500).send("伺服器發生錯誤");
  }
});

app.get("/newDeck", async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    let did = Date.now();
    const newDeck = new Deck({
      name,
      deckId: did,
      picture:
        "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/TWIC/TWIC-001.png",
      cardId: [],
      count: [],
      owner: "admin", //這裡應該要改成登入的使用者
      costCount: [0,0,0,0,0,0,0],
    });
    await newDeck.save();
    res.json({ id: did, message: "牌組新增成功" });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/editDeck", async (req, res) => {
  try {
    const { deckId, cardId, count } = req.query;
    console.log(deckId, cardId, count);
    let deck = await Deck.findOne({ deckId: deckId });
    let cindex = deck.cardId.indexOf(cardId);
    if (cindex >= 0) {
      deck.count[cindex] = count;
    } else {
      deck.cardId.push(cardId);
      deck.count.push(count);
    }
    if (count == 0) {
      deck.cardId.splice(cindex, 1);
      deck.count.splice(cindex, 1);
    }
    await deck.save();
    res.json({ message: "牌組編輯成功" });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/getCardCount", async (req, res) => {
  try {
    const { deckId, cardId } = req.query;
    console.log(deckId, cardId);
    let ct;
    let deck = await Deck.findOne({ deckId: deckId });
    let cindex = deck.cardId.indexOf(cardId);
    if (cindex >= 0) {
      ct = deck.count[cindex];
    } else {
      ct = 0;
    }

    res.json({ count: ct, message: "牌組編輯成功" });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/api/deckList", async (req, res) => {
  const jsonData = await Deck.find().sort({ id: 1 });
  res.json(jsonData);
});

app.get("/api/deckta", async (req, res) => {
  try {
    const { deckId } = req.query;
    let deck = await Deck.findOne({ deckId: deckId });
    res.json({ deck });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/api/findid", async (req, res) => {
  try {
    const { cardId } = req.query;
    let card = await Card.findOne({ id: cardId });
    res.json({ card });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/api/deleteDeck", async (req, res) => {
  try {
    const { deckId } = req.query;
    await Deck.findOneAndDelete({ deckId: deckId });
    console.log("刪除成功");
    res.json({ message: "刪除成功" });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.get("/updateCover", async (req, res) => {
  try {
    const { deckId,picture,costCount } = req.query;
    let deck = await Deck.findOne({ deckId: deckId });
    deck.picture = picture;
    deck.costCount = costCount;
    await deck.save();
    res.json({ message: "封面更新成功" });
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器錯誤");
  }
});

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
