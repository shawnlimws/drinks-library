
document.querySelector('body')
  .addEventListener('click', event => {
    event.preventDefault()
    // console.log(event.target.id)
    if (event.target.id === 'buttonSu') addDrink()
    if (event.target.id === 'buttonAddI') addInput()
    if (event.target.id === 'buttonNew') clearInput()
  })

var numberofIngredient = 1
var nextcounter = 2
var limitofIngredient = 4
function addInput () {
  var idName = 'ingredientsclass' + numberofIngredient.toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + nextcounter + '\'>' +
      '<label for=\'ingredients\'>ingredients ' + nextcounter + ': <br></label>' +
        '<label for=\'unit\'>unit: </label>' +
        '<input type=\'text\' id=\'unit' + nextcounter + '\' name=\'unit\' />' +
        '<label for=\'amount\'> amount: </label>' +
        '<input type=\'number\' id=\'amount' + nextcounter + '\' name=\'amount\' />' +
        '<label for=\'ingredient\'> ingredient: </label>' +
        '<input type=\'text\' id=\'ingredient' + nextcounter + '\' name=\'ingredient\'/>' +
    '</div>'
//  console.log('addInput => ' + idName)

  newdiv = document.getElementById(idName)
  newdiv.insertAdjacentHTML('afterend', stringDiv)
  numberofIngredient = numberofIngredient + 1
  nextcounter = nextcounter + 1

  if (numberofIngredient === limitofIngredient) {
    var newdiv = document.getElementById('ingredientsAll')
    newdiv.nextElementSibling.remove()
  //  alert('You have reached the limit of adding ' + counter + ' inputs')
  }
}

function addDrink () {
  // console.log('addDrink')
  // var author = document.querySelector('#author').value
  // var name = document.querySelector('#name').value
  // var glass = document.querySelector('#glass').value
  // var garnish = document.querySelector('#garnish').value
  // var preparation = document.querySelector('#preparation').value
  const myHeaders = new window.Headers()
  const myInit = {method: 'POST',
                 headers: myHeaders,
                 mode: 'no-cors',
                 cache: 'no-cache' }
  var data = {'author': document.querySelector('#author').value,
    'name': document.querySelector('#name').value,
     'glass': document.querySelector('#glass').value,
     'category': document.querySelector('#category').value,
     'ingredients': [],
     'preparation': document.querySelector('#preparation').value }
  // var oneIngredient = {
  //   'unit': '',
  //   'amount': 0,
  //   'ingredient': ''
  // }
  // console.log(author, name, glass, garnish, preparation)
  // data.ingredients.push(oneIngredient)

  const totalIngredient = document.getElementById('ingredientsAll').childElementCount
  var counter = Array(totalIngredient).fill(1).map((e, index) => (e + index))
  counter.forEach(e => {
    var unit = 'unit' + e.toString(10)
    var amount = 'amount' + e.toString(10)
    var ingredient = 'ingredient' + e.toString(10)
    var oneIngredient = {
      'unit': document.querySelector('#' + unit).value,
      'amount': document.querySelector('#' + amount).value,
      'ingredient': document.querySelector('#' + ingredient).value
    }

    data.ingredients.push(oneIngredient)
  })

// console.log( counter)
  window.fetch('/?data=' + JSON.stringify(data), myInit)
}

function clearInput () {
  const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
  var counter = Array(totalIngredient).fill(1).map((e, index) => Array(totalIngredient).length - (e + index))
  // console.log(counter)
  counter.forEach(e => {
    if (e === 0) return
    var newdiv = document.querySelector('#ingredientsclass' + e.toString(10))
    // console.log(e)
    newdiv.nextElementSibling.remove()
  })
  document.querySelector('#name').value = ''
  document.querySelector('#glass').value = ''
  document.querySelector('#garnish').value = ''
  document.querySelector('#category').value = ''
  document.querySelector('#preparation').value = ''
  document.querySelector('#garnish').value = ''
  document.querySelector('#unit1').value = ''
  document.querySelector('#amount1').value = ''
  document.querySelector('#ingredient1').value = ''
  if (totalIngredient === 4) {
    var newdiv = document.querySelector('#ingredientsAll')
    newdiv.insertAdjacentHTML('afterend', '<div class="buttonIn">' +
      '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredints</button>' +
    '</div>')
  }
  numberofIngredient = 1
  nextcounter = 2
  limitofIngredient = 4

  console.log('clear')
}
