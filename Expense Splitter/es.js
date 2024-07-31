function splitExpense() {
    const totalAmount = parseFloat(document.getElementById('total-amount').value);
    const numberOfPeople = parseInt(document.getElementById('number-of-people').value);

    if (isNaN(totalAmount) || isNaN(numberOfPeople) || totalAmount <= 0 || numberOfPeople <= 0) {
        document.getElementById('result').textContent = "Please enter valid numbers for both fields.";
        return;
    }

    const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);
    document.getElementById('result').textContent = `Each person should pay: $${amountPerPerson}`;
}
