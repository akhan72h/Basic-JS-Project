
let randomNumber = parseInt(Math.random()*100+1);

//console.log(randomNumber);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];   //prevGuess to store previous guess

let numGuesses = 1; //to start guessing 1 up 10;

let playGame = true;  

if(playGame){

    submit.addEventListener('click',function(e){

        e.preventDefault();

        let userGuess = parseInt(userInput.value);

        console.log(userGuess);

        validateGuess(userGuess);
    })
}

function validateGuess(guess){

    if(isNaN(guess) || guess < 1 || guess > 100){
        displayMessage('Please enter a number between 1 and 100');
    }
    else if(prevGuess.includes(guess)){
        displayMessage('You have already guessed that number');
    }
    else{
            
           prevGuess.push(guess);

           if(numGuesses>10){

              displayGuess(guess);
              displayMessage(`Game Over. Random Number ${randomNumber}`);
              endGame();
           }
           else{
             CheckGuess(guess);
             displayGuess(guess);
             }
        }

}
function CheckGuess(guess){
    
    if(guess===randomNumber){

        displayMessage('You guessed it Right...');
    }
    else if( guess < randomNumber){

        displayMessage('Your guess is Too Low');
    }
    else if(guess > randomNumber){
        displayMessage('Your guess is Too High');
    }
}


function displayGuess(guess){
  
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    remaining.innerHTML = `You have ${10-numGuesses} guesses left`;
    numGuesses++;
}

function displayMessage(message){

lowOrHi.innerHTML = `<h2>${message}</h2>`;

}


function endGame(){

  
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){

  

    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click',function(e){
       
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuesses = 1;
        userInput.removeAttribute('disabled');
        userInput.value = '';
        guessSlot.innerHTML = '';
        remaining.innerHTML = `You have ${10-numGuesses} guesses left`;
        startOver.removeChild(p);
        playGame = true;

    })

}
