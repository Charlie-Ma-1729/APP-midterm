const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = process.env.DB;
require("./cardSchema");
const Card = mongoose.model("Card");

mongoose.connect(mongoDB);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/", async (req, res) => {
  const jsonData = await Card.find();
  res.json(jsonData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
