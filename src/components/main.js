import { createCardsBoard } from './cards-board';
import styles from '@/styles/modules/main.module.scss';

export const gameState = {
  firstCard: undefined,
  secondCard: undefined,
  lockBoard: false,
  moves: 0,
  matches: 0,
  totalPairs: 8,
};

export function createMain() {
  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.className = styles.h1;
  h1.textContent = 'Memory Game';

  const gameContainer = document.createElement('div');
  gameContainer.id = 'gameContainer';

  const cardsBoard = createCardsBoard();

  gameContainer.append(cardsBoard);

  main.replaceChildren(h1, gameContainer);

  return main;
}
