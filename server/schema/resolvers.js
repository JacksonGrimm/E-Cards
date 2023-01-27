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
  },
};

module.exports = resolvers;
