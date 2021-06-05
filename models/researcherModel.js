// model that describes what a researcher in our db is going to look like
const mongoose = require("mongoose");

const researcherSchema = new mongoose.Schema({
  // detail properties of researcherSchema data
  name: {
    type: String,
    required: true
  }
});
// create Model using mongoose
const Researcher = mongoose.model("researcher", researcherSchema);

module.exports = Researcher;
