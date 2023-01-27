const { Schema, model } = require("mongoose");

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
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

const Club = model("club", clubSchema);
module.exports = { Club };
