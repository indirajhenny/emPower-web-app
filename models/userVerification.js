const mongoose = require("mongoose");

const UserVerificationSchema = new mongoose.Schema({
  // detail properties of UserVerificationSchema data
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expiresAt: Date,
});

// UserVerificationSchema can be used to create Model
// mongoose will create collection of UserVerification(s) which hold single UserVerification docs
const UserVerification = mongoose.model("UserVerification", UserVerificationSchema);
// UserVerificationSchema shows/details how each single doc will look

// function to validate UserVerification account info
/*const validate = (UserVerification) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(UserVerification);
};*/


module.exports = UserVerification;
