const express = require('express');
const router = express.Router();
// bring in GameUpload model to use here
const GameUpload = require('../models/gameUpload');

// Routes - define routes inside server that determines
//  what is sent to and received by the client
router.get('/api/info', (req, res) => {
  // hard-coded JSON data for now sent to the client
  // use model to insert data into db
  GameUpload.find({ })
    // sending data coming in from the database
    .then((data) => {
      // returns data
      console.log('Data: ', data);
      // send client data
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});

// create POST request - route tells react app this is where
// data needs to be sent to server/outside application (db)
// handles data coming in from the client/browser
router.post('/api/save', (req, res) => {
  // body is the entirety of the data, this identifier cannot change
  console.log('Body: ', req.body);
  // save body data into db
  const data = req.body;

  const newGameUpload = new GameUpload(data);
  // use .save model method to save data into model to sent to DB
  newGameUpload.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server erro'});
      return;
    }
    // GameUpload
    return res.json({
      msg: 'Your data has been saved!'
    });
  });


});

module.exports = router;
