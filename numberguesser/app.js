// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assing UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again') {
        window.location.reload();
    } 
});

// Listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate 

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // Wrong number
        guessesLeft -= 1;
        
        if (guessesLeft === 0) {
            // Game over - Lost
           
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`, 'red');
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.boderColor = 'red';
            // Clear Input
            guessInput.value = '';
            // Set message

            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
        }
    }
});

// Game Over
function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';

     // Disable input
     guessInput.disable = true;
     //Change border color
     guessInput.style.borderColor = color;
     // Set text color
     message.style.color = color;
     // Set message
     setMessage(msg);

     // Play Again?
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again';
}

//Get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}