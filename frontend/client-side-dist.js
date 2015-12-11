(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _add = require('./lib/add.js');

// For search functions

document.querySelector('body').addEventListener('keypress', function (event) {
  var searchValue = document.querySelector('#searchValue').value;
  var byName = document.querySelector('#byName').checked;
  var byIngredient = document.querySelector('#byIngredient').checked;
  var key = event.which || event.keyCode;
  var enter = 13;
  if (key === enter && byName === true) {
    window.fetch('/drinks?byName=' + searchValue).then(function (response) {
      return response.json();
    }).then(function (json) {
      document.querySelector('#results').innerHTML = '';
      var list = Array.prototype.slice.call(json);
      list.forEach(function (drink) {
        var div = document.createElement('div');
        div.textContent = drink.name;
        div.setAttribute('class', 'cocktails');
        document.querySelector('#results').appendChild(div);
      });
    });
  } else if (key === enter && byIngredient === true) {
    window.fetch('/drinks?byIngredient=' + searchValue).then(function (response) {
      return response.json();
    }).then(function (json) {
      document.querySelector('#results').innerHTML = '';
      var list = Array.prototype.slice.call(json);
      list.forEach(function (drink) {
        var div = document.createElement('div');
        div.textContent = drink.name;
        div.setAttribute('class', 'cocktails');
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
  // console.log('excellent')
  event.preventDefault();

  if (addDisplay) {
    (0, _add.addAndDisplay)();
    addDisplay = false;
  }
  // if (event.target.id !== 'H3') { return }
  // else {
  // console.log(event.target.id)
  if (event.target.id === 'buttonSu') {
    addDisplay = true;
    (0, _add.addDrink)();
  }
  if (event.target.id === 'buttonAddI') (0, _add.addInput)();
  if (event.target.id === 'H3') addDisplay = false;
  // clearInput()

  // }
});

},{"./lib/add.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndDisplay = addAndDisplay;
exports.addInput = addInput;
exports.addDrink = addDrink;
exports.clearInput = clearInput;
exports.clearinsertHere = clearinsertHere;
function addAndDisplay() {
  var displayString = '<form id=\'formCreate\'>' + ' <div id=\'authorDiv\'>' + '<label for=\'name\'>Name: </label>' + '<input type=\'text\' id="name" autocomplete=off placeholder=\'Name of drink ...\' />' + '</div>' + '<div id=\'glassDiv\'>' + '<label for=\'glass\'>Glass: </label>' + '<input type=\'text\' id=\'glass\' placeholder=\'Drinkware ...\' />' + '</div>' + '<div id=\'garnishDiv\'>' + '<label for=\'garnish\'>Garnish: </label>' + '<input type=\'text\' id=\'garnish\' placeholder=\'Garnish ...\' />' + '</div>' + '<div id=\'categoryDiv\'>' + '<label for=\'category\'>Category: </label>' + '<input type=\'text\' id=\'category\' placeholder=\'Category ...\' />' + '</div>' + '<div id=\'preparationDiv\'>' + '<label for=\'preparation\'>Preparation:</label>' + '<input type=\'text\' id=\'preparation\' placeholder=\'Preparation ...\' />' + '</div>' + '<div class=\'ingredientsAll\' id=\'ingredientsAll\'>' + '<div id=\'ingredientsclass1\'>' + '<label for=\'ingredients\'>Ingredients 1: <br></label>' + '<label for=\'unit\'>Unit: <select id=\'unit1\'> <option value=\'cl\'> cl' + '<option value=\'floz\'> fl oz</select></label>' +
  // '<input type=\'text\' id=\'unit1\' name=\'unit\' />' +
  '<label for=\'amount\'>Amount:' + '<input type=\'number\' id=\'amount1\' name=\'amount\' /></label>' + '<label for=\'ingredient\'>Ingredient:' + '<input type=\'text\' id=\'ingredient1\' name=\'ingredient\' placeholder=\'Ingredient ...\'  /></label>' + '</div>' + '</div>' + '<div class=\'buttonIn\'>' + '<button type=\'ingredientsAdd\' id=\'buttonAddI\'>Add more ingredients</button>' + '</div>' +
  // '<div class=\'buttonNew\'>' +
  //     '<button type=\'buttonNew\' id=\'buttonNew\'>New addition</button>' +
  // '</div>' +
  '<div class=\'buttonSu\'>' + '<button type=\'submit\' id=\'buttonSu\'>save your data</button>' + '</div>' + '<form>';
  if (document.querySelector('#saveMessage')) {
    console.log('saveM');
    document.querySelector('footer').removeChild(document.querySelector('#saveMessage'));
  }
  var inSert = document.querySelector('#insertHere');
  inSert.insertAdjacentHTML('afterend', displayString);
}

function addInput() {
  // var numberofIngredient = 1
  // var nextcounter = 2
  var limitofIngredient = 2;
  var totalIngredient = document.querySelector('#ingredientsAll').childElementCount;
  console.log(totalIngredient);
  var idName = '#ingredientsclass' + totalIngredient;
  // (totalIngredient).toString(10)
  var stringDiv = '<div id=\'ingredientsclass' + (totalIngredient + 1) + '\'>' + '<label for=\'ingredients\'>ingredients ' + (totalIngredient + 1) + ': <br></label>' +
  // '<label for=\'unit\'>unit: </label>' +
  '<label for=\'unit\'>Unit: <select id=\'unit' + (totalIngredient + 1) + '\'> <option value=\'cl\'> cl' + '<option value=\'floz\'>fl oz</select></label>' +
  //  '<input type=\'text\' id=\'unit' + (totalIngredient + 1) + '\' name=\'unit\' />' +
  '<label for=\'amount\'>Amount:' + '<input type=\'number\' id=\'amount' + (totalIngredient + 1) + '\' name=\'amount\' />' + '</label>' + '<label for=\'ingredient\'>Ingredient:' + '<input type=\'text\' id=\'ingredient' + (totalIngredient + 1) + '\' name=\'ingredient\' placeholder=\'Ingredient ...\' />' + '</label>' + '</div>';
  console.log(idName);
  // newdiv = document.querySelector('#' + idName)
  document.querySelector(idName).insertAdjacentHTML('afterend', stringDiv);

  if (totalIngredient === limitofIngredient) {
    var newdiv = document.querySelector('#ingredientsAll');
    newdiv.nextElementSibling.remove();
  }
}
function addDrink() {
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
  window.fetch('/?data=' + JSON.stringify(data), myInit).then(function (res) {
    console.log(res);

    document.querySelector('footer').removeChild(document.querySelector('#formCreate'));
    var newdiv = document.querySelector('#insertHere');
    newdiv.insertAdjacentHTML('afterend', '<div id=\'saveMessage\'>' + 'Data saved ...' + '</div>');
  });
}

function clearInput() {
  if (document.querySelector('#saveMessage')) {
    console.log('saveM');
    document.querySelector('footer').removeChild(document.querySelector('#saveMessage'));
  }
  // clearinsertHere()
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

function clearinsertHere() {
  if (document.querySelector('#saveMessage')) {
    console.log('saveM');
    document.querySelector('footer').removeChild(document.querySelector('#saveMessage'));
  }
  if (document.querySelector('#formCreate')) document.querySelector('footer').removeChild(document.querySelector('#formCreate'));
}

},{}]},{},[1]);
