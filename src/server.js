const express = require('express');
require('dotenv').config(); // Load environment variables from .env file
const app = require('./app');

// Start the server
const port = 3000;
app.listen(port, function() {
  console.log('Bubble node app running on port ' + port);
});
