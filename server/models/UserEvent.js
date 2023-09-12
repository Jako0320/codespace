const mongoose = require('mongoose');

const User = require('./User')
const Event = require('./Event');


const UserEvent = mongoose.model('UserEvent', userEventSchema);

module.exports = UserEvent;