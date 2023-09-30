// As a note, after testing the currency conversion was not exactly up to date, hopefully the library
// developer will get on that. The currencies do change quite frequently though.

// This library will not support multiple currencies in a single request so I had to go through
// a differnt route.

// Let's say that I want to travel to a country for vacation. I have 5000 dollars to spend at whatever country I get to.
// I can run that amount through the NPM and return the amount translated to each currency.
// To find variables for currencies follow this link
// https://www.npmjs.com/package/currency-converter-lt?activeTab=code

// Currency Converter Instantiation JSON object
const CC = require('currency-converter-lt')

// Amount of money.
amountMoney = 5000;

// Define an array of target currencies
const currencyVar = ["EUR", "JPY", "GBP", "RUB", "MXN"];

// Function to perform a single currency conversion
function convertCurrency(fromCurrency, toCurrency) {
    return new CC({ from: fromCurrency, to: toCurrency, amount: amountMoney }).convert();
}

// We will be performing the conversions one at a time using an async function.
// Async makes the code cleaner, so instead of using '.then' or '.catch', we can simply use 'await'.
// It handles promises in a more linear fashion.
async function performConversions() {
    console.log("Conversion Results:");
    
    for (const currency of currencyVar) {
        try {
            const response = await convertCurrency("USD", currency);
            console.log(`USD to ${currency}:`, response);
        } catch (error) {
            console.error(`Error converting USD to ${currency}:`, error); // Error message.
        }
    }
}

// Start the conversion process
performConversions();

// Output:
// Conversion Results:
// USD to EUR: 4700
// USD to JPY: 746900
// USD to GBP: 4100
// USD to RUB: 490000
// USD to MXN: 87100.00000000001