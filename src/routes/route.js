const express = require('express');
const route = express.Router();
const mainController = require('../controller/mainController');
const chatController = require('../controller/chatController');
const { default: axios } = require('axios');

// Chat route
route.post('/api/chat', chatController.handleChat);

// Main routes
route.get("/", mainController.home);
route.get("/courses", mainController.courses);
route.get("/chatbot", mainController.chatbot);
route.get("/course", mainController.course);

// Catch-all route
route.all("/*", (req,res) => {
    res.status(400).send({status: false, message: "Something isn't working"});
});

module.exports = route;
