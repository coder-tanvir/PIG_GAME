'use strict';

///Getting HTML elements
const score0element = document.querySelector('#score--0');
const score1element = document.getElementById('score--1');
const diceelement = document.querySelector('.dice');
const btnnewgame = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

///Setting the initial state
score0element.textContent = 0;
score1element.textContent = 0;
diceelement.classList.add('hidden');

//Rolling dice
btnroll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceelement.classList.remove('hidden');
  diceelement.src = `dice-${dice}.png`;

  //Checking the dice and adding to the score
});
