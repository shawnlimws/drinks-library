export function addAndDisplay () {
  const displayString = '<form>' +
    // '<div id=\'authorDiv\'>' +
    //     '<label for=\'author\'>author:</label>' +
    //     '<input type=\'text\' id=\'author\' />' +
    // '</div>' +
    '<div>' +
        '<label for=\'name\'>name:</label>' +
        '<input type=\'text\' id="name" />' +
    '</div>' +
    '<div>' +
        '<label for=\'glass\'>glass:</label>' +
        '<input type=\'text\' id=\'glass\' />' +
    '</div>' +
    '<div>' +
        '<label for=\'garnish\'>garnish:</label>' +
        '<input type=\'text\' id=\'garnish\' />' +
    '</div>' +
    '<div>' +
        '<label for=\'category\'>category:</label>' +
        '<input type=\'text\' id=\'category\' />' +
    '</div>' +
    '<div>' +
        '<label for=\'preparation\'>preparation:</label>' +
        '<input type=\'text\' id=\'preparation\' />' +
    '</div>' +
    '<div class=\'ingredientsAll\' id=\'ingredientsAll\'>' +
      '<div id=\'ingredientsclass1\'>' +
          '<label for=\'ingredients\'>ingredients 1:<br></label>' +
            '<label for=\'unit\'>unit:</label>' +
            '<input type=\'text\' id=\'unit1\' name=\'unit\' />' +
            '<label for=\'amount\'>amount:</label>' +
            '<input type=\'number\' id=\'amount1\' name=\'amount\' />' +
            '<label for=\'ingredient\'>ingredient:</label>' +
            '<input type=\'text\' id=\'ingredient1\' name=\'ingredient\' />' +
        '</div>' +
      '</div>' +
      '<div class=\'buttonIn\'>' +
        '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredints</button>' +
      '</div>' +
      '<div class=\'buttonNew\'>' +
          '<button type=\'buttonNew\' id=\'buttonNew\'>New addition</button>' +
      '</div>' +
      '<div class=\'buttonSu\'>' +
          '<button type=\'submit\' id=\'buttonSu\'>save your data</button>' +
      '</div>' +
    '<form>'
  var inSert = document.querySelector('#insertHere')
  inSert.insertAdjacentHTML('afterend', displayString)
}

export function addInput () {
  // var numberofIngredient = 1
  // var nextcounter = 2
  var limitofIngredient = 3
  const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
  console.log(totalIngredient)
  var idName = 'ingredientsclass' + (totalIngredient).toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + (totalIngredient + 1) + '\'>' +
      '<label for=\'ingredients\'>ingredients ' + (totalIngredient + 1) + ': <br></label>' +
        '<label for=\'unit\'>unit: </label>' +
        '<input type=\'text\' id=\'unit' + (totalIngredient + 1) + '\' name=\'unit\' />' +
        '<label for=\'amount\'> amount: </label>' +
        '<input type=\'number\' id=\'amount' + (totalIngredient + 1) + '\' name=\'amount\' />' +
        '<label for=\'ingredient\'> ingredient: </label>' +
        '<input type=\'text\' id=\'ingredient' + (totalIngredient + 1) + '\' name=\'ingredient\'/>' +
    '</div>'
//  console.log('addInput => ' + idName)

  newdiv = document.querySelector('#' + idName)
  newdiv.insertAdjacentHTML('afterend', stringDiv)
  // numberofIngredient = numberofIngredient + 1
  // nextcounter = nextcounter + 1

  if (totalIngredient === limitofIngredient) {
    var newdiv = document.querySelector('#ingredientsAll')
    newdiv.nextElementSibling.remove()
  //  alert('You have reached the limit of adding ' + counter + ' inputs')
  }
}
export function addDrink () {
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
  var data = {
    // 'author': document.querySelector('#author').value,
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

  const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
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

export function clearInput () {
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
  console.log('clear')
}
