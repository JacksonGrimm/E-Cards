const { gql } = require("apollo-server-express");
const { Club, Card } = require("../models");

try {
  const typeDefs = gql`
    type User {
      _id: ID
      name: String!
      cards: [Card]
      profilePicture: String
      createdAt: String
    }
    type Card {
      _id: ID
      name: String!
    }
    type Query {
      users: [User]!
      cards: [Card]
    }
  `;
  module.exports = typeDefs;
} catch (error) {
  console.log(error);
}
