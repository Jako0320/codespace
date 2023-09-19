const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedEvents: [Event]
        savedPosts: [Post]
    }

    type Event {
        eventId: ID
        name: String
        date: String
        description: String
    }

    type Post {
        _id: ID!
        content: String!
        author: User!
        createdAt: String!
      } 

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getPosts: [Post!]!
        getUserPosts: [Post!]
    }

    input EventInput {
        name: String!,
        date: String!,
        description: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveEvent(_id: ID!, eventToSave: EventInput!): User
        removeEvent(_id: ID!, deleteEvent: String!): User
        createPost(content: String!): Post
    }`;

module.exports = typeDefs;
