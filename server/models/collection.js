const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    maxLength: 350,
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cards",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
});

const CardCollection = model("CardCollection", collectionSchema);
module.exports = { CardCollection };
