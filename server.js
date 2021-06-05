// start up server file
// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// reads local .env file for "hidden" process variables
dotenv.config();

// init express app
const app = express();
// STEP 1: define port
const PORT = process.env.PORT || 8080;

// bring route inside server to make/receive requests
// change this to "./routes/forumRouter"
//const routes = require('./routes/api');

// connect to mongoDB

// mongodb cluster connection string -> delete after deploying in heroku
const MONGODB_URI = process.env.MDB_CONNECT

// STEP 2: connect to mongoDB w/ parameters is
// length of connection and options you can pass
// to mongodb
mongoose.connect(process.env.MDB_CONNECT || MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// check if we're successfully connected to database
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
});

// parses every json or url data coming in; makes all
// requests coming in available to requests called in routes
// populates req.body in endpoints
app.use(express.json());
app.use(cookieParser());
// extended determines how deep we want to go into object
// if the object is not very deep/nested, keep extended at false
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

// instead of '/', we could use '/api' if we decide
// set up routes

// change this to "./routes/forumRouter"
app.use('/', require('./routes/api'));
app.use('/auth', require('./routes/userRouter'));
app.use('/researcher', require('./routes/researcherRouter'));


// STEP 3: Create Custom variable inside heroku to confirm
// app is on heroku
if (process.env.NODE_ENV == 'production') {
  // put client aka react application production build
  // into our server
  app.use(express.static('client/build'));

}

// log every single request that is coming in
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
