
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const createError = require('http-errors');
const cors = require("cors");
const app = express();
app.use(cors());
const sensorRoutes = require('./routes/sensorRoutes');
const SensorReading =require('./models/sensorReadingModel')


app.use(express.json()); // midelware bch t5ali l body mta3 db yetE9ree 
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
const URI = process.env.URI;
mongoose.connect(process.env.URI)
.then(() => {
 console.log('Connected to database!')
 })
 .catch(() => {
   console.log('Connection to database failed!')
 })
 app.use('/api', sensorRoutes)
 
  
// app.get("/getData",(req ,res)=>{

//  res.send(" youtubeLink")
// })
      app.get('/timestamp', async (req, res) => {
       
          const data = await SensorReading.find();
          res.json(data);
      })
      app.get('/humidity', async (req, res) => {
        try {
          const irrigationData = await  SensorReading.findOne().sort({ _id: -1 });
          res.json(irrigationData.humidity);
        } catch (error) {
          console.error('Erreur lors de la récupération du niveau d\'humidité du sol:', error);
          res.status(500).send('Une erreur s\'est produite lors de la récupération du niveau d\'humidité du sol.');
        }
      });
      app.get('/Temperature', async (req, res) => {
        try {
          const irrigationData = await  SensorReading.findOne().sort({ _id: -1 });
          res.json(irrigationData.Temperature);
        
        } catch (error) {
          console.error('Erreur lors de la récupération du niveau d\'humidité du sol:', error);
          res.status(500).send('Une erreur s\'est produite lors de la récupération du niveau d\'humidité du sol.');
        }
      });
      app.get('/soilHumidity', async (req, res) => {
        try {
          const irrigationData = await  SensorReading.findOne().sort({ _id: -1 });
          res.json(irrigationData.soilHumidity);
        
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
// api for login 
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// Create a model
const User = mongoose.model('User', userSchema);
const mail = [
  { email:"benrefifanesrine@gmail.com" , password:"aaa" },
 


];

User.insertMany(mail)
  .then(result => {
    console.log(`${result.length} documents insérés avec succès.`);
  })
  .catch(error => {
    console.error("Erreur lors de l'insertion des documents :", error);
  })

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json("exist");
    } else {
      res.status(404).json("notexist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("error");
  }
});


   const PORT = process.env.PORT ;
app.listen(PORT, () => {
   console.log('Server started on port ' + PORT + '...');});


