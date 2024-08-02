const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');
const convertButton = document.getElementById('convert');

const apiKey = 'ad1625b5822de333f983c419'; // Replace with your API key
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

async function populateCurrencyOptions() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

        fromCurrency.value = 'USD';
        toCurrency.value = 'EUR';
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
}

async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
        const data = await response.json();
        resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } catch (error) {
        console.error('Error converting currency:', error);
    }
}

convertButton.addEventListener('click', convertCurrency);

populateCurrencyOptions();
