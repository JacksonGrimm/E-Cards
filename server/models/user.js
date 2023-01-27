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
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
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
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);
module.exports = { User };
