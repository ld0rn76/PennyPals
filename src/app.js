// Import
const express = require('express');
const route = require('./routes/route');
const axios = require('axios');
const app = express();
const path = require('path');

// Static Files
//app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/', route);

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Listen on port 3000
const port = 3000;
app.listen(port, function () {
  console.log('Bubble node app running on port ' + port);
});