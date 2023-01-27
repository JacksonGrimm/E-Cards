const { Schema, model } = require("mongoose");

const tradesSchema = new Schema({
  club: {
    type: Schema.Types.ObjectId,
    ref: "Clubs",
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cards",
    },
  ],
  tradedAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
});

module.exports = { tradesSchema };
