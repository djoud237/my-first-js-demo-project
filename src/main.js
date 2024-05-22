const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json({message: "Welcome Kenne"});
});


app.get('/get/:id', function (req, res) {
  res.json({value: req.params.id});
});


const SERVER_PORT = 3000;

app.listen(SERVER_PORT, ()=> {
  console.log(`Server started on port${SERVER_PORT}`);
});