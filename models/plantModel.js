// models/plantModel.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  aisle: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  plantImage: {
    type: String,
  },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
