const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const UserVerification = require("../models/userVerification");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {v4: uuidv4} = require("uuid");

// path for static verified page
const path = require("path");
const dotenv = require('dotenv');

// nodemailer transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

// test success of transporter
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for messages");
    console.log(success);
  }

});

// REGISTER endpoint: send data to server
router.post("/", async(req, res) => {
  try {
    const {email, password, passwordVerify} = req.body;

    // validation of userModel inputs

    if (!email || !password || !passwordVerify) {
      // frontend/user error or bad request that is not accepted
      return res.status(400)
      .json({message: "Please enter all required fields."});
      /*return res.status(400)
      .send("Please enter all required fields.");*/
    }
    if (password.length < 6) {
      //console.log("Please enter a password of at least 6 characters.");
      return res.status(400)
      .json({message: "Please enter a password of at least 6 characters."});
      /*return res.status(400)
      .send("Please enter a password of at least 6 characters.");*/
    }
    if (password !== passwordVerify) {
      return res.status(400)
      .json({message: "Please enter the same password twice."});
      /*return res.status(400)
      .send("Please enter the same password twice.");*/
    }

    // **** USE SOMETHING LIKE THIS TO DIFFERENTIATE B/N RESEARCHER
    // **** AND STUDENT/NON-RESARCHER USERS
    // check if there is an existing account w/ given email
    const existingUser = await User.findOne({email: email})
    if (existingUser) {
      return res.status(400)
      .json({message: "Account already exists."});
    }

    // hash user's input password with salt
    // generate salt aka random string of chars used to hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account with user's input to the db
    const newUser = new User({
      email,
      passwordHash,
      verified: false
    });
    // saves newUser doc to mongoDB
    //const savedUser = await newUser.save()
    const savedUser = await newUser.save().then((result) => {
        // handle account verification
        sendVerificationEmail(result, res);
    })
    .catch((err) => {
      res.json({
        status: "FAILED",
        message: "An error occured when saving account!"
      })
    });

    /*
    ////////MIGHT REMOVE THIS IMMEDIATE LOGIN SECTION//////////

    // log the user in by signing the token
    const token = jwt.sign({
      user: savedUser._id
    }, process.env.JWT_SECRET) // sign it using jwt secret key

    // send the token to client in a HTTP-only cookie
    // **** WHEN APP IS DEPLOYED, OTHER COOKIE OPTIONS REQUIRED
    res.cookie("token", token, {
      httpOnly: true
    }).send("Successfully registered and logged in!");
    //res.status(200).send("Successfully registered!");

    ///////////////////////////////////////////////////////////
    */
  } catch (err) {
    console.error(err);
    // internal server error
    res.status(500).send();
  }
});

const sendAccountVerifiedEmail = ({email}, res) => {
  const mailOptions2 = {
    from: process.env.AUTH_EMAIL,
    to: email, // "empowerucf@gmail.com"
    subject: "Account has been Verified!",
    html: `<h3>Your registered account has been verified!</h3>
            <p>You can now log-in and add resources to the emPower Through Play website.</p>`
  };

  transporter
    .sendMail(mailOptions2)
    .then(() => {
      console.log("Verification email sent");
      // email sent and verification record saved
      res.json({
        status: "PENDING",
        message: "Verification email sent"
      })
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: "FAILED",
        message: "Verifiation email failed"
      })
    })


}

const sendVerificationEmail = ({_id, email}, res) => {
  // url to be used in the email
  // UPDATE: change this to heroku PORT later
  //const currentUrl = "http://localhost:8080/";
  const currentUrl = process.env.PORT;
  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: "empowerucf@gmail.com", // "empowerucf@gmail.com"
    subject: "Verify New Account",
    html: `<p>Verify ${email} email address to complete account registration</p>
            <p>This link expires in 6 hours</p><p>Press
            <a href=${currentUrl + "auth/verify/" + _id + "/" + uniqueString}>here</a> to proceed.</p>`
  };

  // hash the uniqueString
  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((hashedUniqueString) => {
      // set values in userVerification collection
      const newVerification = new UserVerification({
        userId: _id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      });

      newVerification
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {
              console.log("Verification email sent");
              // email sent and verification record saved
              res.json({
                status: "PENDING",
                message: "Verification email sent"
              })
            })
            .catch((error) => {
              console.log(error);
              res.json({
                status: "FAILED",
                message: "Verifiation email failed"
              })
            })
        })
        .catch((error) => {
          console.log(error);
          res.json({
            status: "FAILED",
            message: "Couldn't save verification email data!"
          })
        });
    })
    .catch(() => {
      res.json({
        status: "FAILED",
        message: "An error occurred while hasing email data!"
      })
    });
};

// verify email
router.get("/verify/:userId/:uniqueString", (req, res) => {
  // check if verificaiton record actually exists
  let { userId, uniqueString } = req.params;
  console.log("Checking params in Verify email GET: " + req.params);

  // search UserVerification for userId
  UserVerification
    .find({userId})
    .then((result) => {
      if (result.length > 0) {
        // user verification record exists so we proceed

        // check if the record expired
        const {expiresAt} = result[0];
        const hashedUniqueString = result[0].uniqueString;

        if (expiresAt < Date.now()){
          // record no longer valid so we delete it
          UserVerification
            .deleteOne({userId}) // delete based off userId
            .then(result => {
              User
                .deleteOne({_id: userId})
                .then(() => {
                  //res.send("Link has expired. Please sign up again.");
                  res.json({message: "Link has expired. Please sign up again."});

                })
                .catch((error) => {
                  //res.status(401).send("Clearing user with expired unique string failed.");
                  res.json({message: "Clearing user with expired unique string failed."});

                });
            })
            .catch((error) => {
              console.log(error);
              //res.status(401).send("Error occured while clearing expired user verification record.");
              let message = "Error occured while clearing expired user verification record.";
              res.redirect(`/verified/error=true&message=${message}`);
              res.status(401).json({message: "Error occured while clearing expired user verification record."});
            });

        } else {
          // valid record exists so we validate the user string
          console.log("Valid User Verification Record exists and we can officially verify account!");

          // first compare the hashed unique string
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then(result => {
              if (result) {
                // strings match
                User
                  .updateOne({_id: userId}, {verified: true})
                  .then(() => {
                    UserVerification
                      .deleteOne({userId})
                      .then(() => {
                        // UPDATE to heroku PORT later
                        //res.redirect('http://localhost:3000/Verified');
                        res.redirect('http://empowerthroughplay.herokuapp.com/Verified');
                        console.log("EMAIL HAS BEEN VERIFIED!!");
                        //User
                          //.find({userId})
                        //sendAccountVerifiedEmail();
                      })
                      .catch((error) => {
                        //res.status(401).send("Error occured while finalizing successful verification.");
                        res.status(401).json({message: "Error occured while finalizing successful verification."});
                      });
                  })
                  .catch((error) => {
                    //res.status(401).send("Error occured while updating user record to show verificaiton.");
                    res.status(401).json({message: "Error occured while updating user record to show verificaiton."});
                  });
              } else {
                //res.status(401).send("Invalid verification details passed. Check inbox.");
                res.status(401).json({message:"Invalid verification details passed. Check inbox."});
              }
            })
            .catch((error) => {
              //res.status(401).send("Error occured while comparing unique strings.");
              res.status(401).json({message:"Error occured while comparing unique strings."});
            });
        }

      } else {
        let message = "Account record does not exist or has been verified already. Please sign up or log in.";
        res.redirect(`/verified/error=true&message=${message}`);
        // user verification record does NOT exist
        //res.status(401).send("Account record does not exist or has been verified already. Please sign up or log in.");
        res.status(401).json({message:"Account record does not exist or has been verified already. Please sign up or log in."});
      }
    })
    .catch((error) => {
      console.log(error);
      let message = "An error has occurred while checking for existing user verification!";
      res.redirect(`/verified/error=true&message=${message}`);
      // pass a message from backend to frontend
      //res.status(401).send("An error has occured while checking for existing user verification!");
      res.status(401).json({message:"An error has occured while checking for existing user verification!"});
    })
})

// verified page route
/*router.get("/verified", (req, res) => {
  console.log("Getting verified page route");
  res.sendFile(path.join(__dirname, "../views/verified.html"));
})*/

// LOG-IN endpoint
router.post("/login", async(req, res) => {
  try {
    const {email, password} = req.body;

    // validate
    if (!email || !password) {
      // frontend/user error or bad request that is not accepted
      return res.status(400)
      .json({message: "Please enter all required fields."});
    }

    // get document belonging to email address
    const existingUser = await User.findOne({email});
    // if it does not exist, user using an unverified email
    if (!existingUser) {
      return res.status(401) // unauthorized request
      .json({message: "Wrong email or password."});
    } else {
      // user EXISTS

      // check if user is VERIFIED
      if (!existingUser.verified) {
        // user is NOT verified
        return res.status(401) // unauthorized request
        .json({message: "Account has not been verified. Wait for admin to verify you."});
      } else {
        // existing user is VERIFIED
        // check if input password is correct
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect) {
          return res.status(401).json({message: "Wrong email or password."});
        }

        // at this point user is valid  -> sign token
        // log the user in by signing the token
        const token = jwt.sign({
          user: existingUser._id
        }, process.env.JWT_SECRET);

        res.cookie("token", token, {
          httpOnly: true
        }).send();
      }
    }
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
