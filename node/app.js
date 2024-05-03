const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = process.env.DB;
const fs = require('fs');
require("./cardSchema");
const Card = mongoose.model("Card");

mongoose.connect(mongoDB);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/data.json", async (req, res) => {
  const jsonData = await Card.find();
  saveJson(jsonData, (err)=> {
    if (err) {
      console.log(err);
    }
  });
  res.json(jsonData);
});


function saveJson(data, callback) {
  fs.writeFile('./data.json', JSON.stringify(data), callback);
}


app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
