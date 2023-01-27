const models = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const userArray = await models.User.find();
        return userArray;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
