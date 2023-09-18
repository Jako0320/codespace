const { Schema } = require('mongoose');

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
      default: () => Date.now(),
      get: (eventDate) => {
        return `${eventDate.toLocaleDateString()} ${eventDate.toLocaleTimeString()}`
      }
    },

    description: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
  }
);

module.exports = eventSchema;
