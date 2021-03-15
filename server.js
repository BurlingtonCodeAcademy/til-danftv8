//imports mongoose library
const mongoose = require('mongoose')

//Setup for Mongoose/MongoDB connection and Library
mongoose.connect('mongodb://localhost:27017/entries', {useNewParser: true, useUnifiedTopology: true})

//Initializing Variable for Mongoose connection
const entriesDB = mongoose.connection

//Schema for User Input
const entrySchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
})

//Setup for Entry Model and Collection
const EntryModel = mongoose.model('entryInfo', entrySchema)

//imports express library
const express = require('express')

//a variable that represents the function that runs the server
const app = express()

//imports middleware for forms 
app.use(express.urlencoded({extended: true}))

//saying what the current port is or what it is locally
const port = process.env.PORT || 5000

//importing path library to translate file path
const path = require('path')

//initializing public as a variable
const publicDir = './client/build'

//sets up front end to access public only
app.use(express.static(path.resolve(publicDir)))

//route for form information
app.post('/text-storage', async(req, res) => {
    let formInfo = req.body
    let entryObject = new EntryModel(formInfo)
    await entryObject.save()
})

//event handler that sends all routes to index.html
app.get('*', (request, response) => {
    response.sendFile(path.resolve(publicDir + '/index.html'))
})

//listener for confirming requests coming in on the port
app.listen(port, () => {
    console.log('serving on port:', port)
})




