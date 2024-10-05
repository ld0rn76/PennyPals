const axios  = require('axios');

const home = async (req, res) => {
    res.render("home")
}

const investing = async(req, res) => {
    let options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {Indices: 'NIFTY 50'},
        headers: {
            'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
            'x-rapidapi-key': process.env.STOCK_API_KEY
        }
    };
    
    axios.request(options)
    .then(response => {
        const stocks = response.data;
        console.log(stocks)
        res.render("investing", stocks)
    })
    .catch(error => {
        console.error(error);
        res.render('error');
        })
}

module.exports = {home, investing}