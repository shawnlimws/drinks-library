const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.byIngredient
    ? list.filter(function (cocktail) {
      // console.log(cocktail)
      const isIngredient = ingredient => ingredient.ingredient
      const matchQuery = ingredient => {
        // console.log(ingredient)
        return ingredient.ingredient.toLowerCase() === req.query.byIngredient.toLowerCase()
      }
      return cocktail.ingredients
        .filter(isIngredient)
        .some(matchQuery)
    })
    //   const ingredient = item.ingredients.toLowerCase()
    //   const query = [{ingredient: req.query.byIngredient.toLowerCase()}]
    //   return ingredient.includes(query)
    : list
)
