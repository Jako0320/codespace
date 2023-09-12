const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 25,
    },

    eventDate: {
      type: Date,
      default: () => Date.now(),
      get: (eventDate) => {
        return `${eventDate.toLocaleDateString()} ${eventDate.toLocaleTimeString()}`
      }
    },

    eventInfo: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    
    // Not sure what to ref yet
    participants: [
      {
      type: mongoose.SchemaTypes.ObjectId,
      ref: '',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Initialize Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
