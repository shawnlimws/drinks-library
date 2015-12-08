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

const drinksSchema = mongoose.Schema({
  'username': String,
  'name': String,
  'glass': String,
  'category': String,
  'ingredients': ingrendientSchema,
  'garnish': String,
  'preparation': String
})

const DrInk = connection.model(collectionName, drinksSchema)

const findDrink = { 'username': 'Q Q' }

app.get('/mydrink', function (req, res) {
  DrInk.findOne(findDrink, (err, drinkData) => {
    if (err) return console.error(err)
    res.send(drinkData)
    // console.log('in read module, read data is ' + drinkData)
    // mongoose.disconnect()
  })
})

app.post('/mydrink', function (req, res) {
  const newingrendient = [
    {
      'unit': 'ml',
      'amount': 4,
      'ingredient': 'how i know'
    },
    {
      'unit': 'cc',
      'amount': 5,
      'ingredient': 'how u know'
    }
  ]

  var newDrink = new DrInk()
  newDrink.username = 'Q Q'
  newDrink.name = 'my drink'
  newDrink.glass = 'cup'
  newDrink.category = 'Before shitting'
  newDrink.ingredients = newingrendient
  newDrink.garnish = 'shit'
  newDrink.preparation = 'drink more water'

  newDrink.save(function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
      // mongoose.disconnect()
  })
  console.log('post => save new data')
  res.send('new data')
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
