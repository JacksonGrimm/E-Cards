const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost/e-cards-DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log(error);
}

module.exports = mongoose.connection;
