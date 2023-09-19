const Event = require('./Event');
const User = require('./User');
const UserEvent = require('./UserEvent');
import React from "react";
import ReactDOM from "react-dom";
import DonationPage from "./DonationPage";

ReactDOM.render(<DonationPage />, document.getElementById("root"));


module.exports = { Event, User, UserEvent };
