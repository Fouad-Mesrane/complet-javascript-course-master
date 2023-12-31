'use strict';

/* console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value); 

*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } // when the answer is correct logic
   else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscore = score;
    if(highscore >= score){
    document.querySelector('.highscore').textContent = highscore};
// too high guess logic
  }else if(guess > secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too high';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'Game Over 🎮';
        document.querySelector('.score').textContent = 0;
    }

    // too low guess logic
  } else if(guess < secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over 🎮';
      document.querySelector('.score').textContent = 0;
    }
  }


});

  // reset button
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20 + 1); 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
  //  document.getElementsByClassName('.guess').value = '0';
    document.querySelector('body').style.backgroundColor=('#222');
    score = 20;
    document.querySelector('.score').textContent = score;
})
