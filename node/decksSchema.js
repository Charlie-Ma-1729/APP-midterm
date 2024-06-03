const mongoose = require("mongoose");

const decksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deckId: {
    type: Number,
    required: true,
    index: true,
  },
  picture: {
    type: String,
    required: true,
  },
  cardId: {
    type: [String],
    required: true,
  },
  count: {
    type: [Number],
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  costCount: {
    type: [Number],
    required: true,
  },
});

mongoose.model("Decks", decksSchema);
