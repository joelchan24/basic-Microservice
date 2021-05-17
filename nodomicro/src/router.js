
const express = require('express');
const app = express();
//middlewares

app.use(require('./usuario'));

module.exports=app;