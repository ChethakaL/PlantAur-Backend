const WorkData = require('../models/workModel');

const saveWorkData = async (req, res) => {
  try {
    const { workerName, longitude, latitude, date, time } = req.body;

    const workData = new WorkData({
      workerName,
      longitude,
      latitude,
      date,
      time,
    });

    await workData.save();

    res.status(201).json({ message: 'Work data saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  saveWorkData,
};
