const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/huso', function (req, res) {
  res.send('Hello World HÜSO')
})

app.get('/kutluhan', function (req, res) {
  res.send('Hello World Kutluhan')
})

app.post('/kutluhan', function (req, res) {
  console.log(req.body)
  res.status(200).send('Hello World' + req.body.name + req.body.age)
})

app.listen(3000, () => {
  console.log("started", "saasdas")
})