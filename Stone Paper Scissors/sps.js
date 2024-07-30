const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const gameResultDisplay = document.getElementById('gameResult');

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    animateChoice(userChoiceDisplay, userChoice);
    animateChoice(computerChoiceDisplay, computerChoice);
    animateResult(gameResultDisplay, result);
}

function getComputerChoice() {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function animateChoice(displayElement, choice) {
    displayElement.textContent = capitalize(choice);
    displayElement.classList.add('highlight');
    setTimeout(() => displayElement.classList.remove('highlight'), 500);
}

function animateResult(displayElement, result) {
    displayElement.textContent = result;
    displayElement.classList.add('highlight-result');
    setTimeout(() => displayElement.classList.remove('highlight-result'), 1000);
}
