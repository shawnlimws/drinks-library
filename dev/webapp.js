const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const path = require('path')
const dataBase = 'drinkdb'
const collectionName = 'drinks'
const dbUri = 'mongodb://' +
  process.env.DRINK_MONGODB_USER + ':' +
  process.env.DRINK_MONGODB_PASSWORD +
  '@ds055574.mongolab.com:55574/' + dataBase

const connection = mongoose.createConnection(dbUri)

const ingrendientSchema = mongoose.Schema({
  'unit': String,
  'amount': Number,
  'ingredient': String
})

const DrinksSchema = mongoose.Schema({
  'username': String,
  'name': String,
  'glass': String,
  'category': String,
  'ingredients': ingrendientSchema,
  'garnish': String,
  'preparation': String
})

const drInk = connection.model(collectionName, DrinksSchema)

const findDrink = { 'username': 'Jon' }
// app.use('/', express.static(__dirname + '/public'))
//
// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.render('index.html')
// })

app.get('/', function (req, res) {
  drInk.findOne(findDrink, (err, drinkData) => {
    if (err) return console.error(err)
    res.send(drinkData)
    // console.log('in read module, read data is ' + drinkData)
    // mongoose.disconnect()
  })
})

app.put('/update', function (req, res) {
  const changeRequired = {username: 'Jon'}
  const changeData = {name: 'String'}
  const changeType = {new: true}
  drInk.findOneAndUpdate(changeRequired, changeData, changeType, function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
      // mongoose.disconnect()
  })
  console.log('/put, save data')
  res.send('updated')
})

module.exports = app
