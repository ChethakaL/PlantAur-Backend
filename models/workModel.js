const mongoose = require('mongoose');

const workDataSchema = new mongoose.Schema({
  workerName: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const WorkData = mongoose.model('WorkData', workDataSchema);

module.exports = WorkData;
