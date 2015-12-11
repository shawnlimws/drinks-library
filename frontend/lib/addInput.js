export function addInput () {
  // var numberofIngredient = 1
  // var nextcounter = 2
  var limitofIngredient = 4
  const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
  var idName = 'ingredientsclass' + (totalIngredient).toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + (limitofIngredient + 1) + '\'>' +
      '<label for=\'ingredients\'>ingredients ' + (limitofIngredient + 1) + ': <br></label>' +
        '<label for=\'unit\'>unit: </label>' +
        '<input type=\'text\' id=\'unit' + (limitofIngredient + 1) + '\' name=\'unit\' />' +
        '<label for=\'amount\'> amount: </label>' +
        '<input type=\'number\' id=\'amount' + (limitofIngredient + 1) + '\' name=\'amount\' />' +
        '<label for=\'ingredient\'> ingredient: </label>' +
        '<input type=\'text\' id=\'ingredient' + (limitofIngredient + 1) + '\' name=\'ingredient\'/>' +
    '</div>'
//  console.log('addInput => ' + idName)

  newdiv = document.getElementById(idName)
  newdiv.insertAdjacentHTML('afterend', stringDiv)
  // numberofIngredient = numberofIngredient + 1
  // nextcounter = nextcounter + 1

  if (totalIngredient === limitofIngredient) {
    var newdiv = document.getElementById('ingredientsAll')
    newdiv.nextElementSibling.remove()
  //  alert('You have reached the limit of adding ' + counter + ' inputs')
  }
}
