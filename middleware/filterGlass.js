const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.byGlass
    ? list.filter(item => {
      const glass = item.glass.toLowerCase()
      const query = req.query.byGlass.toLowerCase()
      return glass.includes(query)
    })
    : list
)
