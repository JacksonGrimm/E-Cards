const { Schema, model } = require("mongoose");

const CardSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    maxLength: 350,
  },
  rarity: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
});

const Card = model("cards", CardSchema);
module.exports = { Card };
