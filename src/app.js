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
app.use(express.json());

// Handling CORS and Errors
const cors = require('cors');
app.use(cors());

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Export the app so server.js can use it
module.exports = app;