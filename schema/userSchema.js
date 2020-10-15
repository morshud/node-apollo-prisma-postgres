
const typeDefs = `
    type User {
      firstname: String!,
      lastname: String!
    }

    type Query {
        getUser(id: Int!): User,
        getAllUsers: [User!]!
    }

    type Mutation {
        createUser(firstname: String!, lastname: String!): User!
        updateUser(id: ID!, firstname: String, lastname:String): [Int!]!
        deleteUser(id: ID!): Int!
    }
`;

module.exports = typeDefs;
