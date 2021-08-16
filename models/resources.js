const mongoose = require('mongoose');

// Schema - allows us to add formatted
// data to mongodb database
const Schema = mongoose.Schema;
// review how to change name of keys below
const ResourcesSchema = new Schema({
  title: String,
  description: String,
  link: String,
  topic: String,
  type: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// define Model and register Schema to it
const resources = mongoose.model('resources', ResourcesSchema);
// allows this model to be used anywhere else
module.exports = resources;