
const express = require('express');
const app = express();
//middlewares

app.use(require('./despedida'));

module.exports=app;