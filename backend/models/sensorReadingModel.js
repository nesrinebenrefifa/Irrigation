const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
 
  Temperature: Number,
  humidity: Number,
  soilHumidity: Number,
  timestamp: { type: Date, default: Date.now }
});

const SensorReading = mongoose.model('SensorReading', Schema);

    // Insertion de quelques documents dans la collection
    const documents = [
      {   humidity: 30,soilHumidity: "300", Temperature: 13 },
      {   humidity: 30,soilHumidity: "500",Temperature:23 },
      {  humidity: 23,soilHumidity: "800",Temperature:24  }
   
    ];

    SensorReading.insertMany(documents)
      .then(result => {
        console.log(`${result.length} documents insérés avec succès.`);
      })
      .catch(error => {
        console.error("Erreur lors de l'insertion des documents :", error);
      })

module.exports = SensorReading;