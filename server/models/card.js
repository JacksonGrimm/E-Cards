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
  CardCollection: {
    type: Schema.Types.ObjectId,
    ref: "CardCollections",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
});

const Card = model("card", CardSchema);
module.exports = { Card };
