const { Schema, model } = require("mongoose");
const { tradesSchema } = require("./trades");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
    minLength: 5,
  },
  profilePicture: {
    type: String,
  },
  clubs: [
    {
      type: Schema.Types.ObjectId,
      ref: "clubs",
    },
  ],
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "cards",
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
