const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/e-cards-DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
