const models = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const userArray = await models.User.find().populate("cards");
        return userArray;
      } catch (error) {
        console.log(error);
      }
    },
    cards: async () => {
      try {
        const cardArray = await models.Card.find();
        return cardArray;
      } catch (error) {
        console.log(error);
      }
    },
    clubs: async () => {
      try {
        const clubsArray = await models.Club.find();
        return clubsArray;
      } catch (error) {
        console.log(error);
      }
    },
    cardCollections: async () => {
      try {
        const cardCollectionArr = await models.CardCollection.find();
        return cardCollectionArr;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
