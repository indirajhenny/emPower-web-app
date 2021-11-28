const express = require('express');
const router = express.Router();
// bring in Games model to use here
const Games = require('../models/gameUpload');

// Routes - define routes inside server that determines
//  what is sent to and received by the client
router.get('/info', (req, res) => {
  // hard-coded JSON data for now sent to the client
  // use model to insert data into db
  Games.find({ })
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
// handles data coming in from the client/browser aka saves game info
router.post('/save', (req, res) => {
  // body is the entirety of the data, this identifier cannot change
  console.log('Body: ', req.body);
  // save body data into db
  const data = req.body;

  const newGameUpload = new Games(data);
  // use .save model method to save data into model to sent to DB
  newGameUpload.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server erro'});
      return;
    }
    // Games
    return res.json({
      msg: 'Your data has been saved!'
    });
  });
});

// handles delete data coming in from the client/browser aka deletes game card
// when delete button in pressed, post request called with userID passed in
// aka button clicked corresponding to specific card data
router.post('/delete', (req, res) => {
  // body is the entirety of the data, this identifier cannot change
  console.log('Body: ', req.body);
  console.log('Params: ', req.params);
  let {title, _id} = req.body;
  console.log(_id);

  Games.deleteOne({_id})
    .then((result) => {
      console.log("Game Card has been deleted");
      res.json({message: "Game Card has been deleted"});
    })
    .catch((error) => {
      console.log("Deleting game cardfailed.");
      res.json({message: "Deleting game cardfailed."});
    });
  // save body data into db
  /*const data = req.body;

  const newGameUpload = new Games(data);
  // use .save model method to save data into model to sent to DB
  newGameUpload.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server erro'});
      return;
    }
    // Games
    return res.json({
      msg: 'Your data has been saved!'
    });
  });*/
});


module.exports = router;
