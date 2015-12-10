(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _add = require('./lib/add.js');

// For search functions

document.querySelector('body').addEventListener('keypress', function (event) {
  var searchValue = document.querySelector('#searchValue').value;
  var byName = document.querySelector('#byName').checked;
  var key = event.which || event.keyCode;
  var enter = 13;
  if (key === enter && byName === true) {
    console.log('goodjob');
    window.fetch('/drinks?byName=' + searchValue).then(function (response) {
      return response.json();
    }).then(function (json) {
      document.querySelector('#results').innerHTML = '';
      var insertPosition = Array.prototype.slice.call(json);
      insertPosition.forEach(function (items) {
        console.log(items.name);
        var div = document.createElement('div');
        div.textContent = items.name;
        div.setAttribute('class', 'note');
        document.querySelector('#results').appendChild(div);
      });
    });
  }
});

// import {addDrink, addInput, clearInput} from './lib/module.js'
// var addAndDisplay = require('./lib/addAndDisplay')
// For create drinks
var addDisplay = true;
document.querySelector('footer').addEventListener('click', function (event) {
  console.log('excellent');
  event.preventDefault();
  if (addDisplay) {
    (0, _add.addAndDisplay)();
    addDisplay = false;
  }
  // console.log(event.target.id)
  if (event.target.id === 'buttonSu') (0, _add.addDrink)();
  if (event.target.id === 'buttonAddI') (0, _add.addInput)();
  if (event.target.id === 'buttonNew') (0, _add.clearInput)();
});

//
//
//
// var numberofIngredient = 1
// var nextcounter = 2
// var limitofIngredient = 4
// function addInput () {
//   var idName = 'ingredientsclass' + numberofIngredient.toString(10)
//   var stringDiv = '<div id=\'ingredientsclass' + nextcounter + '\'>' +
//       '<label for=\'ingredients\'>ingredients ' + nextcounter + ': <br></label>' +
//         '<label for=\'unit\'>unit: </label>' +
//         '<input type=\'text\' id=\'unit' + nextcounter + '\' name=\'unit\' />' +
//         '<label for=\'amount\'> amount: </label>' +
//         '<input type=\'number\' id=\'amount' + nextcounter + '\' name=\'amount\' />' +
//         '<label for=\'ingredient\'> ingredient: </label>' +
//         '<input type=\'text\' id=\'ingredient' + nextcounter + '\' name=\'ingredient\'/>' +
//     '</div>'
// //  console.log('addInput => ' + idName)
//
//   newdiv = document.getElementById(idName)
//   newdiv.insertAdjacentHTML('afterend', stringDiv)
//   numberofIngredient = numberofIngredient + 1
//   nextcounter = nextcounter + 1
//
//   if (numberofIngredient === limitofIngredient) {
//     var newdiv = document.getElementById('ingredientsAll')
//     newdiv.nextElementSibling.remove()
//   //  alert('You have reached the limit of adding ' + counter + ' inputs')
//   }
// }
//
// function addDrink () {
//   // console.log('addDrink')
//   // var author = document.querySelector('#author').value
//   // var name = document.querySelector('#name').value
//   // var glass = document.querySelector('#glass').value
//   // var garnish = document.querySelector('#garnish').value
//   // var preparation = document.querySelector('#preparation').value
//   const myHeaders = new window.Headers()
//   const myInit = {method: 'POST',
//                  headers: myHeaders,
//                  mode: 'no-cors',
//                  cache: 'no-cache' }
//   var data = {'author': document.querySelector('#author').value,
//     'name': document.querySelector('#name').value,
//      'glass': document.querySelector('#glass').value,
//      'category': document.querySelector('#category').value,
//      'ingredients': [],
//      'preparation': document.querySelector('#preparation').value }
//   // var oneIngredient = {
//   //   'unit': '',
//   //   'amount': 0,
//   //   'ingredient': ''
//   // }
//   // console.log(author, name, glass, garnish, preparation)
//   // data.ingredients.push(oneIngredient)
//
//   const totalIngredient = document.getElementById('ingredientsAll').childElementCount
//   var counter = Array(totalIngredient).fill(1).map((e, index) => (e + index))
//   counter.forEach(e => {
//     var unit = 'unit' + e.toString(10)
//     var amount = 'amount' + e.toString(10)
//     var ingredient = 'ingredient' + e.toString(10)
//     var oneIngredient = {
//       'unit': document.querySelector('#' + unit).value,
//       'amount': document.querySelector('#' + amount).value,
//       'ingredient': document.querySelector('#' + ingredient).value
//     }
//
//     data.ingredients.push(oneIngredient)
//   })
//
// // console.log( counter)
//   window.fetch('/?data=' + JSON.stringify(data), myInit)
// }
//
// function clearInput () {
//   const totalIngredient = document.querySelector('#ingredientsAll').childElementCount
//   var counter = Array(totalIngredient).fill(1).map((e, index) => Array(totalIngredient).length - (e + index))
//   // console.log(counter)
//   counter.forEach(e => {
//     if (e === 0) return
//     var newdiv = document.querySelector('#ingredientsclass' + e.toString(10))
//     // console.log(e)
//     newdiv.nextElementSibling.remove()
//   })
//   document.querySelector('#name').value = ''
//   document.querySelector('#glass').value = ''
//   document.querySelector('#garnish').value = ''
//   document.querySelector('#category').value = ''
//   document.querySelector('#preparation').value = ''
//   document.querySelector('#garnish').value = ''
//   document.querySelector('#unit1').value = ''
//   document.querySelector('#amount1').value = ''
//   document.querySelector('#ingredient1').value = ''
//   if (totalIngredient === 4) {
//     var newdiv = document.querySelector('#ingredientsAll')
//     newdiv.insertAdjacentHTML('afterend', '<div class="buttonIn">' +
//       '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredints</button>' +
//     '</div>')
//   }
//   numberofIngredient = 1
//   nextcounter = 2
//   limitofIngredient = 4
//
//   console.log('clear')
// }

},{"./lib/add.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndDisplay = addAndDisplay;
exports.addInput = addInput;
exports.addDrink = addDrink;
exports.clearInput = clearInput;
function addAndDisplay() {
  var displayString = '<form>' +
  // '<div id=\'authorDiv\'>' +
  //     '<label for=\'author\'>author:</label>' +
  //     '<input type=\'text\' id=\'author\' />' +
  // '</div>' +
  '<div>' + '<label for=\'name\'>name:</label>' + '<input type=\'text\' id="name" />' + '</div>' + '<div>' + '<label for=\'glass\'>glass:</label>' + '<input type=\'text\' id=\'glass\' />' + '</div>' + '<div>' + '<label for=\'garnish\'>garnish:</label>' + '<input type=\'text\' id=\'garnish\' />' + '</div>' + '<div>' + '<label for=\'category\'>category:</label>' + '<input type=\'text\' id=\'category\' />' + '</div>' + '<div>' + '<label for=\'preparation\'>preparation:</label>' + '<input type=\'text\' id=\'preparation\' />' + '</div>' + '<div class=\'ingredientsAll\' id=\'ingredientsAll\'>' + '<div id=\'ingredientsclass1\'>' + '<label for=\'ingredients\'>ingredients 1:<br></label>' + '<label for=\'unit\'>unit:</label>' + '<input type=\'text\' id=\'unit1\' name=\'unit\' />' + '<label for=\'amount\'>amount:</label>' + '<input type=\'number\' id=\'amount1\' name=\'amount\' />' + '<label for=\'ingredient\'>ingredient:</label>' + '<input type=\'text\' id=\'ingredient1\' name=\'ingredient\' />' + '</div>' + '</div>' + '<div class=\'buttonIn\'>' + '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredints</button>' + '</div>' + '<div class=\'buttonNew\'>' + '<button type=\'buttonNew\' id=\'buttonNew\'>New addition</button>' + '</div>' + '<div class=\'buttonSu\'>' + '<button type=\'submit\' id=\'buttonSu\'>save your data</button>' + '</div>' + '<form>';
  var inSert = document.querySelector('#insertHere');
  inSert.insertAdjacentHTML('afterend', displayString);
}

function addInput() {
  // var numberofIngredient = 1
  // var nextcounter = 2
  var limitofIngredient = 3;
  var totalIngredient = document.querySelector('#ingredientsAll').childElementCount;
  console.log(totalIngredient);
  var idName = 'ingredientsclass' + totalIngredient.toString(10);
  var stringDiv = '<div id=\'ingredientsclass' + (totalIngredient + 1) + '\'>' + '<label for=\'ingredients\'>ingredients ' + (totalIngredient + 1) + ': <br></label>' + '<label for=\'unit\'>unit: </label>' + '<input type=\'text\' id=\'unit' + (totalIngredient + 1) + '\' name=\'unit\' />' + '<label for=\'amount\'> amount: </label>' + '<input type=\'number\' id=\'amount' + (totalIngredient + 1) + '\' name=\'amount\' />' + '<label for=\'ingredient\'> ingredient: </label>' + '<input type=\'text\' id=\'ingredient' + (totalIngredient + 1) + '\' name=\'ingredient\'/>' + '</div>';
  //  console.log('addInput => ' + idName)

  newdiv = document.querySelector('#' + idName);
  newdiv.insertAdjacentHTML('afterend', stringDiv);
  // numberofIngredient = numberofIngredient + 1
  // nextcounter = nextcounter + 1

  if (totalIngredient === limitofIngredient) {
    var newdiv = document.querySelector('#ingredientsAll');
    newdiv.nextElementSibling.remove();
    //  alert('You have reached the limit of adding ' + counter + ' inputs')
  }
}
function addDrink() {
  // console.log('addDrink')
  // var author = document.querySelector('#author').value
  // var name = document.querySelector('#name').value
  // var glass = document.querySelector('#glass').value
  // var garnish = document.querySelector('#garnish').value
  // var preparation = document.querySelector('#preparation').value
  var myHeaders = new window.Headers();
  var myInit = { method: 'POST',
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'no-cache' };
  var data = {
    // 'author': document.querySelector('#author').value,
    'name': document.querySelector('#name').value,
    'glass': document.querySelector('#glass').value,
    'category': document.querySelector('#category').value,
    'ingredients': [],
    'preparation': document.querySelector('#preparation').value };
  // var oneIngredient = {
  //   'unit': '',
  //   'amount': 0,
  //   'ingredient': ''
  // }
  // console.log(author, name, glass, garnish, preparation)
  // data.ingredients.push(oneIngredient)

  var totalIngredient = document.querySelector('#ingredientsAll').childElementCount;
  var counter = Array(totalIngredient).fill(1).map(function (e, index) {
    return e + index;
  });
  counter.forEach(function (e) {
    var unit = 'unit' + e.toString(10);
    var amount = 'amount' + e.toString(10);
    var ingredient = 'ingredient' + e.toString(10);
    var oneIngredient = {
      'unit': document.querySelector('#' + unit).value,
      'amount': document.querySelector('#' + amount).value,
      'ingredient': document.querySelector('#' + ingredient).value
    };

    data.ingredients.push(oneIngredient);
  });

  // console.log( counter)
  window.fetch('/?data=' + JSON.stringify(data), myInit);
}

function clearInput() {
  var totalIngredient = document.querySelector('#ingredientsAll').childElementCount;
  var counter = Array(totalIngredient).fill(1).map(function (e, index) {
    return Array(totalIngredient).length - (e + index);
  });
  // console.log(counter)
  counter.forEach(function (e) {
    if (e === 0) return;
    var newdiv = document.querySelector('#ingredientsclass' + e.toString(10));
    // console.log(e)
    newdiv.nextElementSibling.remove();
  });
  document.querySelector('#name').value = '';
  document.querySelector('#glass').value = '';
  document.querySelector('#garnish').value = '';
  document.querySelector('#category').value = '';
  document.querySelector('#preparation').value = '';
  document.querySelector('#garnish').value = '';
  document.querySelector('#unit1').value = '';
  document.querySelector('#amount1').value = '';
  document.querySelector('#ingredient1').value = '';
  if (totalIngredient === 4) {
    var newdiv = document.querySelector('#ingredientsAll');
    newdiv.insertAdjacentHTML('afterend', '<div class="buttonIn">' + '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredints</button>' + '</div>');
  }
  console.log('clear');
}

},{}]},{},[1]);
