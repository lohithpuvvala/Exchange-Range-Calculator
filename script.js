const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exhcange rates and Update the DOM
function calculate(){
    const currency_one = currencyEl_one.value; 
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/42188b6625cc13f194448e6a/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];

            console.log(currency_one,currency_two,rate);
        });
}

//Event listeners
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

calculate();