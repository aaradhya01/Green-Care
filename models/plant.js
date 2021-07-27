const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plant = new Schema({
  name: String,
  content: String,
  image: String,
  water_type: Number,
  sunlight: Number
});

const Plant = mongoose.model("Plant", plant);
module.exports = Plant;
