
const express = require('express')

const app = express()

const opts = {
  setHeaders: (res, path, stat) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', '*')
  }
}
 
app.use('/', express.static('./', opts))

app.listen(7000)

console.log('Add-on started on: http://127.0.0.1:7000/manifest.json')
