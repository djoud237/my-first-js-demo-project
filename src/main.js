const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json({message: "Welcome Kenne"});
});


app.get('/get/:id', function (req, res) {
  res.json({value: req.params.id});
});


app.listen(3000)