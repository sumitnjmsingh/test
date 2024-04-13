require('dotenv').config()
const express = require('express')
const app = express()
const  port=4000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/twitter', function (req, res) {
    res.send('hello from twitter')
  })

app.get('/login', function (req, res) {
    res.send('<h1>Hello World<h1>')
  })

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port no.:${port}`)
})