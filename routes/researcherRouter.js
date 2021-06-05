const express = require('express');
const Researcher = require("../models/researcherModel");
const router = express.Router();
const auth = require("../middleware/auth");

// add researcher user to database
// auth requires users to be looged-in in order to use the endpoint
router.post("/", auth, async(req, res) => {
  try {
    const {name} = req.body;

    const newResearcher = new Researcher({
      name
    });
    // save newResearcher user input in db
    const saveResearcher = await newResearcher.save();
    // when you save newResearcher, you will get a json response
    res.json(saveResearcher);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// get complete list of all Researchers in db

module.exports = router;
