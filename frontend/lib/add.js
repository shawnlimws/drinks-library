export function addAndDisplay () {
  const displayString = '<form id=\'formCreate\'>' +
    ' <div id=\'authorDiv\'>' +
        '<label for=\'name\'>Name: </label>' +
        '<input type=\'text\' id="name" autocomplete=off placeholder=\'Name of drink ...\' />' +
    '</div>' +
    '<div id=\'glassDiv\'>' +
        '<label for=\'glass\'>Glass: </label>' +
        '<input type=\'text\' id=\'glass\' placeholder=\'Drinkware ...\' />' +
    '</div>' +
    '<div id=\'garnishDiv\'>' +
        '<label for=\'garnish\'>Garnish: </label>' +
        '<input type=\'text\' id=\'garnish\' placeholder=\'Garnish ...\' />' +
    '</div>' +
    '<div id=\'categoryDiv\'>' +
        '<label for=\'category\'>Category: </label>' +
        '<input type=\'text\' id=\'category\' placeholder=\'Category ...\' />' +
    '</div>' +
    '<div id=\'preparationDiv\'>' +
        '<label for=\'preparation\'>Preparation:</label>' +
        '<input type=\'text\' id=\'preparation\' placeholder=\'Preparation ...\' />' +
    '</div>' +
    '<div class=\'ingredientsAll\' id=\'ingredientsAll\'>' +
      '<div id=\'ingredientsclass1\'>' +
          '<label for=\'ingredients\'>Ingredients 1: <br></label>' +
            '<label for=\'unit\'>Unit: <select id=\'unit1\'> <option value=\'cl\'> cl' +
      '<option value=\'floz\'> fl oz</select></label>' +
            // '<input type=\'text\' id=\'unit1\' name=\'unit\' />' +
            '<label for=\'amount\'>Amount:' +
            '<input type=\'number\' id=\'amount1\' name=\'amount\' /></label>' +
            '<label for=\'ingredient\'>Ingredient:' +
            '<input type=\'text\' id=\'ingredient1\' name=\'ingredient\' placeholder=\'Ingredient ...\'  /></label>' +
        '</div>' +
      '</div>' +
      '<div class=\'buttonIn\'>' +
        '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredients</button>' +
      '</div>' +
      // '<div class=\'buttonNew\'>' +
      //     '<button type=\'buttonNew\' id=\'buttonNew\'>New addition</button>' +
      // '</div>' +
      '<div class=\'buttonSu\'>' +
          '<button type=\'submit\' id=\'buttonSu\'>save your data</button>' +
      '</div>' +
    '<form>'
  if (document.querySelector('#saveMessage')) document.querySelector('footer').removeChild(document.querySelector('#saveMessage'))
  document.querySelector('#insertHere').insertAdjacentHTML('afterend', displayString)
}

export function addInput () {
  // var numberofIngredient = 1
  // var nextcounter = 2
  var limitofIngredient = 2
  const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
  console.log(totalIngredient)
  var idName = '#ingredientsclass' + totalIngredient
  // (totalIngredient).toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + (totalIngredient + 1) + '\'>' +
      '<label for=\'ingredients\'>ingredients ' + (totalIngredient + 1) + ': <br></label>' +
        // '<label for=\'unit\'>unit: </label>' +
        '<label for=\'unit\'>Unit: <select id=\'unit' + (totalIngredient + 1) + '\'> <option value=\'cl\'> cl' +
  '<option value=\'floz\'>fl oz</select></label>' +
      //  '<input type=\'text\' id=\'unit' + (totalIngredient + 1) + '\' name=\'unit\' />' +
        '<label for=\'amount\'>Amount:' +
        '<input type=\'number\' id=\'amount' + (totalIngredient + 1) + '\' name=\'amount\' />' +
        '</label>' +
        '<label for=\'ingredient\'>Ingredient:' +
        '<input type=\'text\' id=\'ingredient' + (totalIngredient + 1) + '\' name=\'ingredient\' placeholder=\'Ingredient ...\' />' +
        '</label>' +
    '</div>'
  console.log(idName)
  // newdiv = document.querySelector('#' + idName)
  document.querySelector(idName).insertAdjacentHTML('afterend', stringDiv)

  if (totalIngredient === limitofIngredient) {
    var newdiv = document.querySelector('#ingredientsAll')
    newdiv.nextElementSibling.remove()
  }
}
export function addDrink () {
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
  .then(res => {
    console.log(res)

    document.querySelector('footer').removeChild(document.querySelector('#formCreate'))
    var newdiv = document.querySelector('#insertHere')
    newdiv.insertAdjacentHTML('afterend', '<div id=\'saveMessage\'>' +
    'Data saved ...' +
    '</div>')
  })
}

export function clearInput () {
  if (document.querySelector('#saveMessage')) document.querySelector('footer').removeChild(document.querySelector('#saveMessage'))
  // clearinsertHere()
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

export function clearinsertHere () {
  if (document.querySelector('#saveMessage')) {
    console.log('saveM')
    document.querySelector('footer').removeChild(document.querySelector('#saveMessage'))
  }
  if (document.querySelector('#formCreate')) document.querySelector('footer').removeChild(document.querySelector('#formCreate'))
}
