const express = require('express');
const router = express.Router();
const workDataController = require('../controllers/workDataController');

router.post('/save', workDataController.saveWorkData);

module.exports = router;
