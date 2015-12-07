const express = require('express')
const app = express()
const fetch = require('node-fetch')
const sortBy = require('lodash.sortby')

const filter = require('./middleware/filter')

app.use(filter)

app.get('/drinks', function (req, res) {
  fetch('https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json')
  .then(data => data.json())
  .then(unsorted => sortBy(unsorted, 'name'))
  .then(drinks => res.send(drinks))
})

module.exports = app
