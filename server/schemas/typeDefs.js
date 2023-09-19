const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        savedEvents: [Event]
        savedPosts: String
        # add more here, check models
    }

    type Event {
        eventId: ID
        name: String
        date: String
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input EventInput {
        name: String!,
        date: String!,
        description: String!
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        saveEvent(_id: ID!, eventToSave: EventInput!): User
        removeEvent(_id: ID!, deleteEvent: String!): User
    }`;

module.exports = typeDefs;
