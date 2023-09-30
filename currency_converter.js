// Currency Converter Instantiation JSON object
// Also prompt NPM
const CC = require('currency-converter-lt');
const prompt = require("prompt-sync")({ sigint: true });

// New Currency Converter
let currencyConverter = new CC()

// Input Current Currency
let currentCurrency = prompt("What is the type of currency you want to convert? ");

// Amount of money.
let userInput= prompt("How much money do you wish to convert? ");
let amountMoney = parseFloat(userInput);

// Use link above for this part please.
let currencyVar = prompt("What currency do you wish to convert to? ");

// This demonstrates Chaining
currencyConverter.from(currentCurrency).to(currencyVar).amount(amountMoney).convert().then((response) => {
    console.log(response) });