const { User, Event } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
          return User.findOne({
              _id: context.user_id
          });
      }
      throw AuthenticationError;
    }, 
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) {
          throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
          throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);

      return {token, user };
    },

    saveEvent: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedEvents: args.eventToSave }
            },
            { new: true }
        );
        
        return user;
    }
    throw AuthenticationError;
  },

    removeEvent: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
            { _id: context.user._id },
            { 
                $pull: {
                savedEvents: {
                    eventId: args.deleteEvent
                    },
                },
            },
            { new: true }
        );
      }
      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
