const { mongoose, model } = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const eventSchema = require('./Event')

const userSchema = new Schema(
  {    
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },

    password: {
      type: String,
      required: true,
    },
    
    // friends: [
    //   {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: 'User',
    //   },
    // ],

    savedEvents: [eventSchema],
    
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Virtual created that retrieves length of the user's friends array
// userSchema
//   .virtual('friendCount')
//   .get(function () {
//     return this.friends.length;
//   });

// Initialize User model
const User = model('User', userSchema);

module.exports = User;
