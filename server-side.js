const express = require('express')
const app = express()
const fetch = require('node-fetch')
const sortBy = require('lodash.sortby')

const filterName = require('./middleware/filterName')
const filterIngredient = require('./middleware/filterIngredient')
const filterGlass = require('./middleware/filterGlass')

app.use(filterName)
app.use(filterIngredient)
app.use(filterGlass)

// For static pages
app.use('/', express.static(__dirname + '/frontend'))

// app.get('/', function (req, res) {
//   fetch('/')
// })

app.get('/drinks', function (req, res) {
  fetch('https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json')
  .then(data => data.json())
  .then(unsorted => sortBy(unsorted, 'name'))
  .then(drinks => res.send(drinks))
})

const mongoose = require('mongoose')
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

module.exports = app
