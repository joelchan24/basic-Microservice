const express = require("express");
const app = express();



app.get('/despedida', function (req, res) {
  res.send('[GET]Despedida desde express');
});

app.get('/despedida/:name', function (req, res) {
  let name = req.params.name;
  res.send('[GET] Adios '+name);
});

module.exports=app;
