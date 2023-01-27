const { gql } = require("apollo-server-express");
const { Club, Card } = require("../models");

try {
  const typeDefs = gql`
    type User {
      _id: ID
      name: String!
      profilePicture: String
      createdAt: String
    }
    type Query {
      users: [User]!
    }
  `;
  module.exports = typeDefs;
} catch (error) {
  console.log(error);
}
