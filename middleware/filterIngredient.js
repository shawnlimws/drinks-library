const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.byIngredient
    ? list.filter(item => {
      const ingredient = item.ingredients.toLowerCase()
      const query = req.query.byIngredient.toLowerCase()
      return ingredient.includes(query)
    })
    : list
)

// module.exports = wrap(
//   (req, list) => console.log(list))
