const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  packId: {
    type: String,
    required: true,
    index: true,
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
});

mongoose.model("Card", cardSchema);
