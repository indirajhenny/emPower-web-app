const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER endpoint: send data to server
router.post("/", async(req, res) => {
  try {
    const {email, password, passwordVerify} = req.body;

    // validation of userModel inputs

    if (!email || !password || !passwordVerify) {
      // frontend/user error or bad request that is not accepted
      return res.status(400)
      .json({errorMessage: "Please enter all required fields."});
    }
    if (password.length < 6) {
      //console.log("Please enter a password of at least 6 characters.");
      return res.status(400)
      .json({errorMessage: "Please enter a password of at least 6 characters."});
    }
    if (password !== passwordVerify) {
      return res.status(400)
      .json({errorMessage: "Please enter the same password twice."});
    }

    // **** USE SOMETHING LIKE THIS TO DIFFERENTIATE B/N RESEARCHER
    // **** AND STUDENT/NON-RESARCHER USERS
    // check if there is an existing account w/ given email
    const existingUser = await User.findOne({email: email})
    if (existingUser) {
      return res.status(400)
      .json({errorMessage: "Account already exists."});
    }

    // hash user's input password with salt
    // generate salt aka random string of chars used to hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account with user's input to the db
    const newUser = new User({
      email, passwordHash
    });
    // saves newUser doc to mongoDB
    const savedUser = await newUser.save();

    // log the user in by signing the token
    const token = jwt.sign({
      user: savedUser._id
    }, process.env.JWT_SECRET) // sign it using jwt secret key

    // send the token to client in a HTTP-only cookie
    // **** WHEN APP IS DEPLOYED, OTHER COOKIE OPTIONS REQUIRED
    res.cookie("token", token, {
      httpOnly: true
    }).send();

  } catch (err) {
    console.error(err);
    // internal server error
    res.status(500).send();
  }
});

// LOG-IN endpoint
router.post("/login", async(req, res) => {
  try {
    const {email, password} = req.body;

    // validate
    if (!email || !password) {
      // frontend/user error or bad request that is not accepted
      return res.status(400)
      .json({errorMessage: "Please enter all required fields."});
    }

    // get document belonging to email address
    const existingUser = await User.findOne({email});
    // if it does not exist, user using an unverified email
    if (!existingUser) {
      return res.status(401) // unauthorized request
      .json({errorMessage: "Wrong email or password."});
    }

    // check if input password is correct
    const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
    if (!passwordCorrect) {
      return res.status(401).json({errorMessage: "Wrong email or password."});
    }

    // at this point user is valid  -> sign token
    // log the user in by signing the token
    const token = jwt.sign({
      user: existingUser._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true
    }).send();
  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
});

// LOG-OUT endpoint: clear the COOKIE
router.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  }).send();
});

//const jwt = require("jsonwebtoken");

// allows us to check if we are logged in by sending the token to server to check
router.get("/loggedIn", (req, res) => {
  try {
    // grab cookie token
    const token = req.cookies.token;

    // check if there is a token/a cookie with a token has been sent
    if (!token) {
      // not auth
      return res.json(false);
    }
    // validate token to ensure token has been created with secret key
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);

  } catch(err) {
    res.json(false);
  }
})





module.exports = router;
