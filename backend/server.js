
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const createError = require('http-errors');
const cors = require("cors");
const app = express();
app.use(cors());
const sensorRoutes = require('./routes/sensorRoutes');


app.use(express.json()); // midelware bch t5ali l body mta3 db yetE9ree 
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
const URI = process.env.URI;
mongoose.connect(process.env.URI)
.then(() => {
 console.log('Connection to database!')
 })
 .catch(() => {
   console.log('Connection to database failed!')
 })
 app.use('/api', sensorRoutes)
 
    // Définition du schéma pour les documents dans la collection
    const schema = new mongoose.Schema({
      name: String,
      age: Number,
      city: String
    });

    // Création du modèle pour la collection
    const Person = mongoose.model('Person', schema);

    // Insertion de quelques documents dans la collection
    const documents = [
      { name: "John", age: 30, city: "New York" },
      { name: "Alice", age: 25, city: "Los Angeles" },
      { name: "Bob", age: 35, city: "Chicago" }
    ];

    Person.insertMany(documents)
      .then(result => {
        console.log(`${result.length} documents insérés avec succès.`);
      })
      .catch(error => {
        console.error("Erreur lors de l'insertion des documents :", error);
      })
      app.use(express.json());
// app.get("/getData",(req ,res)=>{

//  res.send(" youtubeLink")
// })
      app.get('/getData', async (req, res) => {
       
          const data = await  Person.find();
          res.json(data);
      })
      app.get('/name', async (req, res) => {
        try {
          const irrigationData = await Person.findOne().sort({ _id: -1 });
          res.json(irrigationData.name);
        } catch (error) {
          console.error('Erreur lors de la récupération du niveau d\'humidité du sol:', error);
          res.status(500).send('Une erreur s\'est produite lors de la récupération du niveau d\'humidité du sol.');
        }
      });
   

 
module.exports = app;
 app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something went wrong!');
 });
 
app.use('/api', sensorRoutes)





   const PORT = process.env.PORT ;
app.listen(PORT, () => {
   console.log('Server started on port ' + PORT + '...');});


