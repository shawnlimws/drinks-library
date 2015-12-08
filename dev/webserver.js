const path = require('path')
const app = require(path.join(__dirname, 'webapp.js'))
const port = process.env.PORT || 12345
app.listen(port)
console.log(`Ready on port ${ port }`)
