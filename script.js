let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function resetGame() {
    attempts = 5;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('feedback').textContent = 'Your guess is...';
    document.getElementById('chances').textContent = 'You have 5 Chances';
    document.getElementById('guessInput').value = '';
    document.getElementById('error').textContent = '';
}

document.getElementById('checkButton').addEventListener('click', function() {
    let userGuess = document.getElementById('guessInput').value;
    document.getElementById('error').textContent = '';

    if (userGuess === '' || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('error').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    
    attempts--;
    if (userGuess == randomNumber) {
        document.getElementById('feedback').textContent = `Congratulations! You guessed it right in ${5 - attempts} attempts. The number was ${randomNumber}.`;
        document.getElementById('checkButton').style.display = 'none';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Your number is high';
    } else {
        document.getElementById('feedback').textContent = 'Your number is low';
    }

    document.getElementById('chances').textContent = `You have ${attempts} Chances`;

    if (attempts == 0 && userGuess != randomNumber) {
        document.getElementById('feedback').textContent = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById('checkButton').style.display = 'none';
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    resetGame();
    document.getElementById('checkButton').style.display = 'block';
});
