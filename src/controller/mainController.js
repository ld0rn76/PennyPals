const axios  = require('axios');

const home = async (req, res) => {
    res.render("home")
}
const courses = async (req, res) => {
    res.render("courses")
}
const chatbot = async (req, res) => {
    res.render("chatbot")
}
const investing = async(req, res) => {
    console.log(process.env.STOCK_API_KEY)
    //apple, amazon, and walmart
    const symbols = ["AAPL:NASDAQ", "WMT:NYSE", "AMZN:NASDAQ"]
    let info = []
    for(let symbol of symbols){
        let options = {
            method: 'GET',
            url: 'https://real-time-finance-data.p.rapidapi.com/stock-quote',
            params: {
                symbol: symbol,
                language: 'en'
            },
            headers: {
            'x-rapidapi-key': process.env.STOCK_API_KEY,
            'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
            }
        };

        await axios.request(options)
        .then(response => {
            const stocks = response.data;
            console.log(stocks)
            info.push(stocks.data)
            
        })
        .catch(error => {
            console.error(error);
            res.render('error');
        })
    }
        
    console.log("TEST", info)
    res.render("investing", {apple: info[0], walmart: info[1], amazon: info[2]})
}

module.exports = {home, investing, courses, chatbot}