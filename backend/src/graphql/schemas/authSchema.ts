import { buildSchema } from 'graphql';

export const authSchema = buildSchema(`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        role: String!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)