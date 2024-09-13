const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7070;

app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//cors middleware to communicate cross platfrom port
app.use(cors())

// Database URL fro connecting db
const db_connection = require('./db/databse.js')

const contactModel = require('./models/contactModel.js')
const contactModels = require('./models/contactModel.js')

//post method .....
app.post('/contact', async (req, res)=>{
    
    details = new contactModels({
        userName: req.body.username,
        userEmail: req.body.useremail,
        userMessages:req.body.usermessage
    })
    const data = await details.save()
    res.send(data)
   console.log(data)
})


// Sever is listening
app.listen(PORT, ()=>{
    console.log(`App is started click- http://localhost:${PORT}`)
}) 
