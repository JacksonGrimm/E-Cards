const connection = require("../config/connection");
const models = require("../models");

const clearDB = async () => {
  try {
    await models.Club.deleteMany({});
    await models.CardCollection.deleteMany({});
    await models.User.deleteMany({});
    await models.Card.deleteMany({});
  } catch (error) {}
};

connection.once("open", async () => {
  try {
    await clearDB();
    await models.Club.create({
      name: "Club-1",
    });
    await models.CardCollection.create({
      name: "Collection-1",
    });
    await models.Card.create({
      name: "Card-Rare",
      image: "Image URL",
      description: "Mega Rare",
      rarity: "Rare",
    });
    await models.User.create({
      name: "User-1",
    });
  } catch (error) {
    console.log(error);
  }
});
