const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const multer = require('multer') // v1.0.5
// const upload = multer() // for parsing multipart/form-data
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

const drinksSchema = mongoose.Schema({
  'username': String,
  'name': String,
  'glass': String,
  'category': String,
  'ingredients': [ingrendientSchema],
  'garnish': String,
  'preparation': String
})

const DrInk = connection.model(collectionName, drinksSchema)

const findDrink = { 'username': 'Q Q' }

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.render('index')
})

app.post('/', function (req, res) {
  var data = JSON.parse(req.query.data)

  var newDrink = new DrInk()
  newDrink.username = data.author
  newDrink.name = data.name
  newDrink.glass = data.glass
  newDrink.category = data.category
  newDrink.ingredients = data.ingredients
  newDrink.garnish = data.garnish
  newDrink.preparation = data.preparation

  newDrink.save(function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
    mongoose.disconnect()
  })
  // console.log('post => save new data')
  // res.send('new data')
})

app.delete('/mydrink', function (req, res) {
  DrInk.findOneAndRemove(findDrink, function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
      // mongoose.disconnect()
  })
  console.log('delete data')
  res.send('data deleted')
})

app.put('/mydrink', function (req, res) {
  const changeData = {
    'glass': 'cup W'
  }
  DrInk.findOneAndUpdate(findDrink, changeData, function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
      // mongoose.disconnect()
  })
  console.log('updated data')
  res.send('data updated')
})

module.exports = app
