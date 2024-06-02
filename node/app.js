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
require("./cardSchema");
const DeckSchema = require("./decksSchema");
const Card = mongoose.model("Card");

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
    const jsonData = await Card.find(query).sort({ id: 1 });
    res.json(jsonData);
  } catch (error) {
    console.error("過濾卡片失敗:", error);
    res.status(500).send("伺服器發生錯誤");
  }
});

app.post("/newDeck", async (req, res) => {
  let name = query.name;
  let did = Date.now();
  const newDeck = new DeckSchema({
    name: query.name,
    deckId: did,
  });
});



app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
