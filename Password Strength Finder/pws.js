document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const strengthIndicator = document.getElementById('strengthIndicator');

    passwordInput.addEventListener('input', () => {
        const value = passwordInput.value;
        let strength = '';

        if (value.length > 10) {
            strength = 'Strong';
            strengthIndicator.style.color = 'green';
        } else if (value.length > 5) {
            strength = 'Medium';
            strengthIndicator.style.color = 'orange';
        } else {
            strength = 'Weak';
            strengthIndicator.style.color = 'red';
        }

        strengthIndicator.textContent = `Strength: ${strength}`;
    });
});
