console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)

console.log(`What do you want to convert?`)

const input = require('sync-input');

// currency input & validation
let currencies = ["JPY", "EUR", "GBP", "RUB", "USD"];
let fromInput = input("From:").toUpperCase();
if (!(currencies.includes(fromInput))) {
    console.log("Unknown currency");
    return;
}
let toInput = input("To:").toUpperCase();
if (!(currencies.includes(toInput))) {
    console.log("Unknown currency");
    return;
}

// amount input and validation
let amountInput = Number(input("Amount:"));
if (isNaN(amountInput)) {
    console.log("The amount has to be a number");
    return;
} else if (amountInput < 1 ) {
    console.log("The amount can not be less than 1");
    return;
}

// setting currency rates
let currencyRate = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

let result = (amountInput / currencyRate[fromInput] * currencyRate[toInput]).toFixed(4);
console.log(`Result: ${amountInput} ${fromInput} equals ${result} ${toInput}`);