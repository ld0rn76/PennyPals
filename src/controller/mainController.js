const axios  = require('axios');

const home = async (req, res) => {
    res.render("home")
}

module.exports = {home}