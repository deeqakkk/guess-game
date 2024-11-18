let secretNumber = Math.round(Math.random() * 20);
let highestScore = 0;
let currentScore = 20;

document.querySelector('.check').addEventListener('click', () => {
    const guessValue = Number(document.querySelector('.guess').value);
    let displayMsg = ''

    if (!guessValue) {
        displayMsg = '⛔️ No number!';
    }

    if (guessValue === secretNumber) {
        displayMsg = '🎉 Correct Number!';
        document.querySelector('.number').innerHTML = guessValue;
        document.querySelector('body').style.backgroundColor = 'green';
        if (currentScore >= highestScore) {
            highestScore = currentScore;
        }

    } else if (guessValue !== secretNumber) {
        currentScore--;

        if (currentScore <= 0) {
            displayMsg = '💥 You lost the game!';
            currentScore = 20;
            highestScore = 0;
        } else if (guessValue < secretNumber) {
            displayMsg = '📉 Too low!';

        } else if (guessValue > secretNumber) {
            displayMsg = '📈 Too high!'
        }
    }


    document.querySelector('.message').innerHTML = displayMsg;
    document.querySelector('.highscore').innerHTML = highestScore;
    document.querySelector('.score').innerHTML = currentScore;

})

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.round(Math.random() * 20);
    document.querySelector('.score').innerHTML = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').innerHTML = 'Start guessing...'
})

