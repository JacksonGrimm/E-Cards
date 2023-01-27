const { Schema, model } = require("mongoose");
const { tradesSchema } = require("./trades");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  clubs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Clubs",
    },
  ],
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cards",
    },
  ],
  trades: [tradesSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
});

const User = model("user", userSchema);
module.exports = { User };
