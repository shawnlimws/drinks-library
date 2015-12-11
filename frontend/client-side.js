
import { addAndDisplay, addInput, addDrink } from './lib/add.js'

// For search functions

document.querySelector('body')
  .addEventListener('keypress', event => {
    var searchValue = document.querySelector('#searchValue').value
    var byName = document.querySelector('#byName').checked
    var byIngredient = document.querySelector('#byIngredient').checked
    var key = event.which || event.keyCode
    var enter = 13
    if (key === enter && byName === true) {
      window.fetch('/drinks?byName=' + searchValue)
      .then((response) => response.json())
      .then(json => {
        document.querySelector('#results').innerHTML = ''
        var list = Array.prototype.slice.call(json)
        list.forEach(drink => {
          var div = document.createElement('div')
          div.textContent = drink.name
          div.setAttribute('class', 'cocktails')
          document.querySelector('#results').appendChild(div)
        })
      })
    } else if (key === enter && byIngredient === true) {
      window.fetch('/drinks?byIngredient=' + searchValue)
        .then((response) => response.json())
        .then(json => {
          document.querySelector('#results').innerHTML = ''
          var list = Array.prototype.slice.call(json)
          list.forEach(drink => {
            var div = document.createElement('div')
            div.textContent = drink.name
            div.setAttribute('class', 'cocktails')
            document.querySelector('#results').appendChild(div)
          })
        })
    }
  })

var addDisplay = true
document.querySelector('footer')
    .addEventListener('click', event => {
      // console.log('excellent')
      event.preventDefault()

      if (addDisplay) {
        addAndDisplay()
        addDisplay = false
      }
      if (event.target.id === 'buttonSu') {
        addDisplay = true
        addDrink()
      }
      if (event.target.id === 'buttonAddI') addInput()
      if (event.target.id === 'H3') addDisplay = false
    })
