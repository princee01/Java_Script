const randomnumber = parseInt(Math.random() * 100 + 1);

const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses')
const remguesses = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter valid number');
    } else if (guess < 1) {
        alert('please enter a number greater than 1');
    }else if (guess > 100) {
        alert('please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`game over. random number was ${randomnumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomnumber) {
        displayMessage(`you guessed it right`);
        endGame();
    } else if (guess < randomnumber) {
        displayMessage(`number is too low`);
    } else if (guess > randomnumber) {
        displayMessage(`number is too high`);
    }
}

function displayGuess(guess) { // will do nothing only clean the values,update guess array and remaining guess
    userinput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remguesses.innerHTML = `${11 - numGuess} `
}

function displayMessage(message) {
    loworhi.innerHTML=`<h2>${message}</h2> `
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
       let randomnumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remguesses.innerHTML = `${11 - numGuess} `;
        userinput.removeAttribute('disabled')
        startover.removeChild(p);

        playGame = true;
    })
}

function endGame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame"> start new game </button>`;
    startover.appendChild(p);
    playGame = false;
    newGame();

}