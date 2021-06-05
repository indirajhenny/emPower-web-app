const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    // grab cookie token
    const token = req.cookies.token;

    // check if there is a token/a cookie with a token has been sent
    if (!token) {
      // not auth
      return res.status(401).json({errorMessage: "Unauthorized"});
    }
    // validate token to ensure token has been created with secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // put verified user into field of request
    req.user = verified.user;
    next();
  } catch(err) {
    console.error(err);
    res.status(401).json({errorMessage: "Unauthorized"});
  }
}

module.exports = auth;
