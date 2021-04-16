const mongoose = require('mongoose');

// Schema - allows us to add formatted
// data to mongodb database
const Schema = mongoose.Schema;
// review how to change name of keys below
const GameUploadSchema = new Schema({
  title: String,
  description: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// define Model and register Schema to it
const GameUpload = mongoose.model('GameUpload', GameUploadSchema);
// allows this model to be used anywhere else
module.exports = GameUpload;
