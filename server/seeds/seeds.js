const connection = require("../config/connection");
const models = require("../models");

connection.once("open", async () => {
  models.Card.create({
    name: "Testing",
    image: "Image URL",
    description: "Mega Rare Dog",
    rarity: "Rare",
  });
});
