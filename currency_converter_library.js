// This library will not support multiple currencies in a single request so I had to go through
// a differnt route. This doesn't require any API calls.

// To find variables for currencies follow this link
// https://www.npmjs.com/package/currency-converter-lt?activeTab=code

// Currency Converter Instantiation JSON object
// Also installed prompt NPM which will allow for user input.
const CC = require('currency-converter-lt')
const prompt = require("prompt-sync")({ sigint: true });

// Amount of money.
const amountMoney = prompt("How much money do you wish to convert? ");

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
    
    for (const currency of currencyVar) 
    {
        try 
        {
            const response = await convertCurrency("USD", currency);
            console.log(`USD to ${currency}:`, response);
        } 
        catch (error) 
        {
            console.error(`Error converting USD to ${currency}:`, error); // Error message.
        }
    }
}

// Start the conversion process
performConversions();

// Output:
// Conversion Results:
// USD to EUR: 4723
// USD to JPY: 746875
// USD to GBP: 4099.37
// USD to RUB: 490000
// USD to MXN: 87094.5