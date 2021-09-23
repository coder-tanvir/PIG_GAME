'use strict';

///Getting HTML elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0element = document.querySelector('#score--0');
const score1element = document.getElementById('score--1');

const current0element = document.getElementById('current--0');
const current1element = document.getElementById('current--1');

const diceelement = document.querySelector('.dice');
const btnnewgame = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

///Setting the initial state
score0element.textContent = 0;
score1element.textContent = 0;
diceelement.classList.add('hidden');

/////Scores
let gameon = true;
let scores = [0, 0];
let currentscore = 0;
let winningscore = 50;

////Functions
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

////Current player
let activeplayer = 0;

/////Rolling dice
btnroll.addEventListener('click', function () {
  if (gameon) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceelement.classList.remove('hidden');
    diceelement.src = `dice-${dice}.png`;

    //Checking the dice and adding to the score
    if (dice != 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

//////////Hold Button
btnhold.addEventListener('click', function () {
  if (gameon) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= winningscore) {
      gameon = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

btnnewgame.addEventListener('click', function () {
  score0element.textContent = 0;
  score1element.textContent = 0;
  current0element.textContent = 0;
  current1element.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  diceelement.classList.add('hidden');
  activeplayer = 0;
  scores = [0, 0];
  gameon = true;
  currentscore = 0;
});
