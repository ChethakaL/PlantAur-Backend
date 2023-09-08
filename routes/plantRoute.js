const express = require('express');
const multer = require('multer');
const plantController = require('../controllers/plantController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload image to Google Drive and save to MongoDB
router.post('/upload', upload.single('plantImage'), plantController.uploadImage);
router.get('/aisle/:aisle', plantController.getPlantsByAisle);

module.exports = router;
