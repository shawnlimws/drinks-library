// For search functions

document.querySelector('body')
  .addEventListener('keypress', event => {
    var searchValue = document.querySelector('#searchValue').value
    var byName = document.querySelector('#byName').checked
    var byIngredient = document.querySelector('#byIngredient').checked
    var key = event.which || event.keyCode
    var enter = 13
    if (key === enter && byName === true) {
      console.log('goodjob')
      window.fetch('/drinks?byName=' + searchValue)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        document.querySelector('#results').innerHTML = ''
        var insertPosition = Array.prototype.slice.call(json)
        insertPosition.forEach(items => {
          console.log(items.name)
          var div = document.createElement('div')
          div.textContent = items.name
          div.setAttribute('class', 'note')
          document.querySelector('#results').appendChild(div)
        })
      })
    }
  })

// For create drinks
document.querySelector('footer')
    .addEventListener('click', event => {
      console.log('excellent')
    })
