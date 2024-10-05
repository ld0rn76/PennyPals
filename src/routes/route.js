const express = require('express');
const route = express.Router();

const mainController = require('../controller/mainController');

route.get("/", mainController.home)

route.all("/*", (req,res) => {res.status(400).send({status: false, message: "Something isn't working"})})

module.exports = route;