'use strict';

// getElementById работает чуть быстрее
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

let isPlaying,
  currentScore,
  activePlayer = 0,
  totalScors;

// обнуление
const initGame = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  isPlaying = true;
  currentScore = 0;
  activePlayer = 0;
  totalScors = [0, 0];

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = currentScore;
  current1Element.textContent = currentScore;

  diceElement.classList.add('hidden');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

initGame();

const switchActivePlayer = function () {
  // обнулили значение текущих очков
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // передача хода другому игроку
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// бросаем кубик
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // сгенерировать рандомное число
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // отобразить число на кубике
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    // если число равно 1 - то передать ход другому игроку, если нет
    // то добавляем очки в "Текущие очки"
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      // динамический выбор элемента на основании переменной
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else switchActivePlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // добавить текущие очки активного игрока
    totalScors[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScors[activePlayer];

    // если общие очки больше или равно 100 то игрок выграл, иначе переключить игрока
    // игра окончена
    if (totalScors[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);
