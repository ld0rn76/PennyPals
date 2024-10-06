// Import
const express = require('express');
const route = require('./routes/route');
const axios = require('axios');
const path = require('path');
const app = express();

// Static Files
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/', route);

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Export the app so server.js can use it
module.exports = app;