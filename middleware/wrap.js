module.exports = action => (req, res, next) => {
  const oldJson = res.json
  res.json = function (list) {
    return oldJson.call(this, action(req, list))
  }
  next()
}

// var oldFetch = window.fetch
// function myFetch (url, cb) {
//   oldFetch(url)
//     .then(cb)
//     .catch(setTimeout(() => {
//       myFetch(url, cb)
//     }, 10000))
// }
// window.fetch = myFetch
