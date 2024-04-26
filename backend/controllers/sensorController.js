const SensorReading = require('../models/sensorReadingModel');

// Fonction pour enregistrer une nouvelle lecture de capteur
exports.createSensorReading = async (req, res) => {
  try {
    const {  temperature, humidity, soilHumidity } = req.body;
    const reading = new SensorReading({  temperature, humidity, soilHumidity });
    await reading.save();
    res.status(201).json({ message: 'Lecture de capteur enregistrée avec succès' });
  } catch (err) {
    console.error('Erreur lors de l\'enregistrement de la lecture de capteur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'enregistrement de la lecture de capteur' });
  }
};

// Fonction pour récupérer toutes les lectures de capteur
exports.getAllSensorReadings = async (req, res) => {
  try {
    const readings = await SensorReading.find().sort({ timestamp: -1 });
    res.json(readings);
  } catch (err) {
    console.error('Erreur lors de la récupération des lectures de capteur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des lectures de capteur' });
  }
};
