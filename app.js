const express = require('express')
const addDays = require('date-fns/addDays')
const format = require('date-fns/format')
const app = express()

app.get('/', (req, res) => {
  let date = new Date()
  let dd = date.getDate()
  let mm = date.getMonth()
  let yy = date.getFullYear()
  let newdate = addDays(new Date(yy, mm, dd), 100)
  let formattedDate = format(newdate, 'dd/MM/yyyy')
  res.send(formattedDate)
})

const server = app.listen(3000, () => {
  console.log('port is 3000')
})

module.exports = app
