import { createShuffledArray } from '@/utils/create-shuffled-array';
import { gameState } from './main';
import { createModal } from './modal';

import styles from '@/styles/modules/main.module.scss';

export function createCardsBoard() {
  const shuffled = createShuffledArray();

  const cardsBoard = document.createElement('div');
  cardsBoard.id = 'cardsBoard';
  cardsBoard.className = styles.cardsBoard;

  for (const item of shuffled) {
    const card = document.createElement('div');
    card.className = styles.card;

    const cardFront = document.createElement('i');
    cardFront.className = styles.cardFront;
    cardFront.classList.add('fa', 'fa-question-circle');

    const cardBack = document.createElement('i');
    cardBack.className = styles.cardBack;
    cardBack.classList.add('fa-solid', item);

    card.addEventListener('click', flipCard);
    card.dataset.item = item;
    card.append(cardFront, cardBack);
    cardsBoard.append(card);
  }

  return cardsBoard;
}

function flipCard(event) {
  const clickedCard = event.currentTarget;
  if (gameState.lockBoard || clickedCard === gameState.firstCard) return;

  clickedCard.classList.add(styles.flipped);

  if (gameState.firstCard === undefined) {
    gameState.firstCard = clickedCard;
  } else {
    gameState.secondCard = clickedCard;
    gameState.lockBoard = true;
    gameState.moves++;
    updateStats();
    checkMatch();
  }
}

function checkMatch() {
  const isMatch =
    gameState.firstCard.dataset.item === gameState.secondCard.dataset.item;

  if (isMatch) {
    setTimeout(() => {
      gameState.firstCard.classList.add(styles.matched);
      gameState.secondCard.classList.add(styles.matched);
      gameState.matches++;
      updateStats();
      resetCards();

      if (gameState.matches === gameState.totalPairs) {
        endGame();
      }
    }, 500);
  } else {
    setTimeout(() => {
      gameState.firstCard.classList.remove(styles.flipped);
      gameState.secondCard.classList.remove(styles.flipped);
      resetCards();
    }, 600);
  }
}

function updateStats() {
  document.querySelector('#moves').textContent = gameState.moves;
  document.querySelector('#matches').textContent = gameState.matches;
}

function resetCards() {
  gameState.firstCard = undefined;
  gameState.secondCard = undefined;
  gameState.lockBoard = false;
}

function endGame() {
  const dialog = createModal();
  dialog.showModal();
}
