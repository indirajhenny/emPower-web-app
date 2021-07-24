const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // detail properties of userSchema data
  email: {type: String, required: true},
  passwordHash: {type: String, required: true},
  verified: {
    type: Boolean,
    default: false
  }
});

// userSchema can be used to create Model
// mongoose will create collection of user(s) which hold single user docs
const User = mongoose.model("user", userSchema);
// userSchema shows/details how each single doc will look

// function to validate User account info
/*const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(user);
};*/


module.exports = User;
