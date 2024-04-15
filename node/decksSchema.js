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
  element: {
    cardId: {
      type: [String],
      required: true,
    },
    count: {
      type: [Number],
      required: true,
    },
  },
});

mongoose.model("Decks", decksSchema);
