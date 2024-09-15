const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7070;

app.use(express.static('dist'))
app.use(express.json());

//cors middleware to communicate cross platfrom port
app.use(cors({ 
    origin: ['http://localhost:5173', '(link unavailable)'], // Allow requests from these origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    credentials: true, // Allow credentials (cookies, etc.)
    preflightContinue: true, // Continue to the next middleware after CORS checks
  }));
  

// Database URL 
const db_connection = require('./db/databse.js')

const contactModel = require('./models/contactModel.js')
const contactModels = require('./models/contactModel.js')

//post method .....
app.post('/contact', async (req, res) => {
    try {
      const details = new contactModels({
        userName: req.body.username,
        userEmail: req.body.useremail,
        userMessages: req.body.usermessage
      });
      const data = await details.save();
      res.send(data);
      console.log(data);
    } catch (error) {
      console.error('Error saving contact details:', error);
      res.status(500).send('Error saving contact details');
    }
  });
  


// Sever is listening
app.listen(PORT, ()=>{
    console.log(`App is started click- http://localhost:${PORT}`)
}) 
