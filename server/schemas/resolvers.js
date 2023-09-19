const { User, Event, Post } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        // Fetch all posts from the database
        const posts = await Post.find()
          .populate("author")
          .sort({ createdAt: -1 });
        return posts;
      } catch (error) {
        throw new Error("Failed to fetch posts");
      }
    },
    getUserPosts: async (_, __, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError("User not authenticated");
      }

      try {
        // Fetch the posts associated with the authenticated user
        const userPosts = await Post.find({ author: context.user._id }).sort({
          createdAt: -1,
        });
        return userPosts;
      } catch (error) {
        throw new Error("Failed to fetch user posts");
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          _id: context.user._id,
        });
      }
      throw new AuthenticationError("User not authenticated");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new AuthenticationError("User not found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    createPost: async (_, { content }, context) => {
      const author = context.user;

      try {
        // Create a new post in the database
        const newPost = new Post({
          content,
          author,
          createdAt: new Date().toISOString(),
        });

        const post = await newPost.save();
        return post;
      } catch (error) {
        throw new Error("Failed to create a new post");
      }
    },

    saveEvent: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedEvents: args.eventToSave },
          },
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError("User not authenticated");
    },

    removeEvent: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              savedEvents: {
                eventId: args.deleteEvent,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("User not authenticated");
    },
  },
};

module.exports = resolvers;
