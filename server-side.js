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
  console.log('great!')
})

module.exports = app
