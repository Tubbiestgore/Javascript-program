const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})
currencyConverter.convert().then((response) => {
    console.log(response) //or do something else
})