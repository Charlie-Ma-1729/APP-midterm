const { text } = require("body-parser");
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  packId: {
    type: String,
    required: true,
    index: true,
  },
  pack: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  element: {
    cost: {
      type: Number,
      required: true,
    },
    charge: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    attribute: {
      type: String,
      required: true,
    },
    night: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
  },
  effect: {
    type: String,
    required: false,
  },
  rare: {
    type: String,
    required: true,
  },
  illustrator: {
    type: String,
    required: true,
  },
});
mongoose.model("Card", cardSchema);
