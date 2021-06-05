const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // detail properties of userSchema data
  email: {type: String, required: true},
  passwordHash: {type: String, required: true}
});

// userSchema can be used to create Model
// mongoose will create collection of user(s) which hold single user docs
const User = mongoose.model("user", userSchema);
// userSchema shows/details how each single doc will look

module.exports = User;
