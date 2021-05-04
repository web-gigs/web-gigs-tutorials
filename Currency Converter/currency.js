//global variables
const form = document.querySelector("form");
const button = document.querySelector(".btn");
// Convert amount from one denomination to another.
const calculateAmount = (rate1, rate2, amount) => {
    let sum = amount * rate2;
    return `${sum.toFixed(2)}`;
};

//the displayAmount function for currency calculation
const displayAmount = event => {
    //prevents the form from submiting without values.
    event.preventDefault();

    // Retrieve values from the form.
    let sum = Number(document.getElementById("amount").value);
    let exchangeRate1 = document.getElementById("rate").value;
    let exchangeRate2 = document.getElementById("to").value;
    // Create variables to update and output values
    let currency = document.getElementById("currency");
    let total = document.getElementById("total");
    let code = document.getElementById("country-code");
    //check if amount is a number
    if (isNaN(sum)) {
        currency.innerHTML = "";
        total.innerHTML= "Input not valid.";
        code.innerHTML = "";
        return;
    } else {
        let rate1;
        let rate2;

        switch (exchangeRate1) {
            case "MXN":
                rate1 = 18.8495;
                break;
            case "USD":
                rate1 = 0.052923;
                break;
            case "HTG":
                rate1 = 69.8086;
                break;
            case "INR":
                rate1 = 6.69;
                break;
            case "CUP":
                rate1 = 1.0;
                break;
            case "CAD":
                rate1 = 1.302;
                break;
            case "EUR":
                rate1 = 0.8649;
                break;
            case "XBT":
                rate1 = 0.000161245;
                break;
            case "GBP":
                rate1 = 0.760151;
                break;
            case "XOF":
                rate1 = 567.206;
                break;
            case "XAF":
                rate1 = 544.02;
                break;
            default:
                return;
        }

        switch (exchangeRate2) {
            case "MXN":
                rate2 = 18.8495;
                break;
            case "USD":
                rate2 = 0.052923;
                break;
            case "HTG":
                rate2 = 69.8086;
                break;
            case "INR":
                rate2 = 6.69;
                break;
            case "CUP":
                rate2 = 1.0;
                break;
            case "CAD":
                rate2 = 1.302;
                break;
            case "EUR":
                rate2 = 0.8649;
                break;
            case "XBT":
                rate2 = 0.000161245;
                break;
            case "GBP":
                rate2 = 0.760151;
                break;
            case "XOF":
                rate2 = 567.206;
                break;
            case "XAF":
                rate2 = 544.02;
                break;
            default:
                return;
        }

        currency.innerHTML = "$";
        total.innerHTML = calculateAmount(rate1, rate2, sum);
        code.innerHTML = exchangeRate2;
    }
};


// Listen for form sumbition.
form.addEventListener("submit", displayAmount);
button.addEventListener("click", displayAmount);
