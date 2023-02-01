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
      image: String
      description: String
      rarity: String
      createdAt: String
    }
    type Club {
      _id: ID
      name: String!
      members: [User]
      createdAt: String
    }
    type cardCollection {
      _id: ID
      name: String!
      description: [User]
      #cards
      createdAt: String
    }
    type Query {
      users: [User]!
      cards: [Card]!
      clubs: [Club]!
      cardCollections: [cardCollection]!
    }
    type Mutation {
      newUser(
        name: String!
        email: String!
        password: String!
        profilePicture: String!
      ): User
      editUser(
        name: String!
        email: String!
        password: String!
        profilePicture: String!
      ): User
      deleteUser(_id: ID!): User
      newCard(
        name: String!
        image: String!
        description: String!
        rarity: String
      ): Card
    }
  `;
  module.exports = typeDefs;
} catch (error) {
  console.log(error);
}
