const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

// Route pour enregistrer une nouvelle lecture de capteur
router.post('/sensor-readings', sensorController.createSensorReading);

// Route pour récupérer toutes les lectures de capteur
router.get('/sensor-readings', sensorController.getAllSensorReadings);

module.exports = router;
