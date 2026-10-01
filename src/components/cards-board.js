import { createShuffledArray } from '@/utils/create-shuffled-array';

import styles from '@/styles/modules/main.module.scss';
import { gameState } from './main';

export function createCardsBoard() {
  const shuffled = createShuffledArray();

  const cardsBoard = document.createElement('div');
  cardsBoard.id = 'cardsBoard';
  cardsBoard.className = styles.cardsBoard;

  for (const item of shuffled) {
    const card = document.createElement('div');
    card.className = styles.card;

    card.addEventListener('click', flipCard);

    const cardFront = document.createElement('div');
    cardFront.className = styles.cardFront;

    const icon = document.createElement('i');
    icon.className = styles.cardBack;
    icon.classList.add('fa-solid', item);

    card.append(icon);
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
    gameState.moves++;
    updateStats();
  }
}

function updateStats() {
  document.querySelector('#moves').textContent = gameState.moves;
  document.querySelector('#matches').textContent = gameState.matches;
}
