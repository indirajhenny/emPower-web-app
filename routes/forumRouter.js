const express = require('express');
const router = express.Router();
// bring in forumQAModel to use throughout endpoints
const ForumQA = require('../models/forumQAModel');

// Routes - define routes inside server that determines
//  what is sent to and received by the client
router.get('/info', (req, res) => {
  // JSON data sent to the client
  // use ForumQA model to insert data into db
  ForumQA.find({ })
    // sending data coming in from the database
    .then((data) => {
      // returns data
      //console.log('Data: ', data);
      // sends received DB data to client-side
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});

// create POST request - route tells react app this is where
// data needs to be sent to server/outside application (db)
// handles data coming in from the client/browser
router.post('/save', (req, res) => {
  // body is the entirety of the data, this identifier cannot change
  console.log('Body: ', req.body);
  // save body data into db
  const data = req.body;

  const newForumQA = new ForumQA(data);
  // use .save model method to save data into model to sent to DB
  newForumQA.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server error'});
      return;
    }
    // ForumQA
    return res.json({
      msg: 'Your data has been saved!'
    });
  });

});

router.put('/update/:id', (req, res) => {
  let updates = req.body;
  //console.log("inside forumRouter put function");
  console.log("Updates in forumRouter PUT: " + updates);

  ForumQA.findOneAndUpdate({ _id: req.body.id }, updates, {new: true})
    .then(updatedForumQA => res.json(updatedForumQA))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
