'use strict';

const anotherFunction = (yer) => (x > y ? 1 : 2);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const eventHandler = function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // не число
  if (!guessingNumber) {
    displayGuessMessage('Введите число');
  }
  // проигрыш
  else if (score <= 1) {
    displayGuessMessage('Game over!');
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
  }
  // выигрыш
  else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    if (hightScore <= score) hightScore = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.highscore').textContent = hightScore;
    document.querySelector('.question').style.width = '40rem';
  }
  // число от пользвателя неправильно
  else if (guessingNumber !== secretNumber) {
    score--;
    displayGuessMessage(
      guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
    );
    document.querySelector('.score').textContent = score;
  }
};

const restartGame = function () {
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
};

const eventEnter = function (e) {
  let eventKey = e.which;
  if (eventKey === 13) {
    eventHandler();
  }
};

document.querySelector('.check').addEventListener('click', eventHandler);
document.querySelector('.again').addEventListener('click', restartGame);
// функция - event heandler - обработчик события
document.addEventListener('keydown', eventEnter);
