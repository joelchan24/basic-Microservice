const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});
//import routes global

app.use(require('./src/router'));

// Listen to the App Engine-specified port, or 8088 otherwise
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});