// Import
const express = require('express');
const route = require('./routes/route');
const axios = require('axios');
const path = require('path');
const app = express();

// Body parser middleware - Add these lines BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use('/js', express.static(path.join(__dirname, '../js')));

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes - Make sure this comes AFTER the middleware
app.use('/', route);

// Handling CORS and Errors
const cors = require('cors');
app.use(cors());

// Export the app so server.js can use it
module.exports = app;