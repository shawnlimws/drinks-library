const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get('/drinks', function (req, res) {
  fetch('https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json')
  .then(data => data.json())
  .then(drinks => res.send(drinks))
})

module.exports = app
