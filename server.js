// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const path = require('path');

// init express app
const app = express();
// STEP 1: define port
const PORT = process.env.PORT || 8080;

// bring route inside server to make/receive requests
const routes = require('./routes/api');

// mongodb cluster connection string -> hide this in future
const MONGODB_URI = 'mongodb+srv://dbAdmin1:admin2021@empowerdb.jxipn.mongodb.net/empowerDatabase?retryWrites=true&w=majority'

// STEP 2: connect to MONGODB/mongoose w/ parameters is
// length of connection and options you can pass
// to mongodb
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// check if we're successfully connected to database
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
});

// parses every json or url data coming in; makes all
// requests coming in available to requests called in routes
app.use(express.json());
// extended determines how deep we want to go into object
// if the object is not very deep/nested, keep extended at false
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

// instead of '/', we could use '/api' if we decide
// configure router
app.use('/', routes);

// STEP 3: Create Custom variable inside heroku to confirm
// app is on heroku
if (process.env.NODE_ENV == 'production') {
  // put client aka react application production build
  // into our server
  app.use(express.static('client/build'));

}

// log every single request that is coming in
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
