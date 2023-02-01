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
  Mutation: {
    newUser: async (_, { name, email, password }) => {
      try {
        const response = await models.User.create({
          name,
          email,
          password,
        });
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    editUser: async (_, { name, email, _id, password, profilePicture }) => {
      try {
        const response = await models.User.findByIdAndUpdate(
          {
            _id: _id,
          },
          {
            name: name,
            email: email,
            password: password,
            profilePicture: profilePicture,
          }
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, { _id }, context) => {
      try {
        const response = await models.User.findOneAndDelete({
          _id: _id,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
module.exports = resolvers;
