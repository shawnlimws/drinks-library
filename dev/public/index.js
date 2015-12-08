
const myHeaders = new Headers()
const myInit = {method: 'POST',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'no-cache' }
document.querySelector('body')
  .addEventListener('click', event => {
    event.preventDefault()
    // console.log(event.target.id)
    if (event.target.id === 'buttonSu') addDrink()
    if (event.target.id === 'buttonAddI') addInput()
  })

var counter = 1
var nextcounter = 2
var limit = 4
function addInput () {
  var idName = 'ingredientsclass' + counter.toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + nextcounter + '\'>' +
      '<label for=\'ingredients\'>ingredients ' + nextcounter + ':<br></label>' +
        '<label for=\'unit\'>unit:</label>' +
        '<input type=\'text\' id=\'unit' + nextcounter + '\' name=\'unit\' />' +
        '<label for=\'amount\'>amount:</label>' +
        '<input type=\'number\' id=\'amount' + nextcounter + '\' name=\'amount\' />' +
        '<label for=\'ingredient\'>ingredient:</label>' +
        '<input type=\'text\' id=\'ingredient' + nextcounter + '\' name=\'ingredient\'/>' +
    '</div>'
  console.log('addInput => ' + idName)
  if (counter === limit) {
      alert('You have reached the limit of adding ' + counter + ' inputs')
  } else {
    var newdiv = document.getElementById(idName)
    newdiv.insertAdjacentHTML('afterend', stringDiv)
    counter = counter + 1
    nextcounter = nextcounter + 1
  }
}

function addDrink () {
  console.log('addDrink')
  var author = document.querySelector('#author').value
  var name = document.querySelector('#name').value
  var glass = document.querySelector('#glass').value
  var garnish = document.querySelector('#garnish').value
  var preparation = document.querySelector('#preparation').value
  console.log(author, name, glass, garnish, preparation)
  fetch('/?data=' + author + name + glass + garnish + preparation, myInit)
}
