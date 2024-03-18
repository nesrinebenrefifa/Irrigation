const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  sensorId: String,
  temperature: Number,
  humidity: Number,
  soilHumidity: Number,
  timestamp: { type: Date, default: Date.now }
});

const SensorReading = mongoose.model('SensorReading', Schema);

    // Insertion de quelques documents dans la collection
    const documents = [
      { sensorId: "John",  humidity: 30,soilHumidity: "300" },
      { name: "Alice", age: 25, city: "Los Angeles" },
      { name: "Bob", age: 35, city: "Chicago" }
    ];

    SensorReading.insertMany(documents)
      .then(result => {
        console.log(`${result.length} documents insérés avec succès.`);
      })
      .catch(error => {
        console.error("Erreur lors de l'insertion des documents :", error);
      })

module.exports = SensorReading;