const inputElement = document.querySelector('input');

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', guess)
let previousGuesses = document.querySelector('.previous-guesses');

let remainingGuesses = document.querySelector('.remaining-guesses');
let totalGuesses = 10;
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
const array =[];

function guess() {
  if (totalGuesses > 0 ) {
    totalGuesses--;
  let number = parseInt(inputElement.value)
 if (number=== randomNumber) {
  document.querySelector('.result').innerHTML = 'Bravo! You guessed the Correct number.'
  return
 } else {
  document.querySelector('.result').innerHTML = 'That aint the number dude!'
  array.push(number);
  inputElement.value = ''
 }
remainingGuesses.innerHTML = `Guesses Remaining:${totalGuesses}`;
previousGuesses.innerHTML = `Previous Guesses: ${array}`;  
  } else {
    document.body.innerHTML = 'Game Over Buddy! Refresh to play again.'
  }
  
}


