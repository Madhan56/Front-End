document.getElementById('calculateButton').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    const bmi = weight / (height * height);
    const result = document.getElementById('result');

    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});
