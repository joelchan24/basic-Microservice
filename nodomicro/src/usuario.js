const express = require("express");
const app = express();


app.post('/hola', function (req, res) {
  res.send('[POST]Saludos desde express');
});
app.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express');
});


module.exports=app;
