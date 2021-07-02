const mongoose = require('mongoose');

// Schema - allows us to add formatted
// data to mongodb database
const Schema = mongoose.Schema;
// review how to change name of keys below
const gamesSchema = new Schema({
  title: String,
  description: String,
  link: String,
  genre: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// define Model and register Schema to it
const games = mongoose.model('games', gamesSchema);
// allows this model to be used anywhere else
module.exports = games;
