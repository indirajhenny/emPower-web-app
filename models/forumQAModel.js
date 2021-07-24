const mongoose = require('mongoose');

// Schema - allows us to add formatted
// data to mongodb database
const Schema = mongoose.Schema;
// review how to change name of keys below
const ForumQASchema = new Schema({
  title: String,
  description: String,
  approved: false,
  reply: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// define Model and register Schema to it
const ForumQA = mongoose.model('ForumQA', ForumQASchema);
// allows this model to be used anywhere else
module.exports = ForumQA;
