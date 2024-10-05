const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config(); // Load environment variables from .env file
const app = require('./app');

// Use environment variables in the Auth0 config
const config = {
  authRequired: true,
  auth0Logout: true,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  secret: process.env.AUTH0_SECRET
};

// The `auth` router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  );
});

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

// Start the server
const port = 3000;
app.listen(port, function() {
  console.log('Bubble node app running on port ' + port);
});
