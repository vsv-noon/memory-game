import { createCardsBoard } from '@/components/cards-board';

export function startNewGame() {
  const gameContainer = document.querySelector('#gameContainer');
  const cardsBoard = createCardsBoard();

  gameContainer.replaceChildren(cardsBoard);
}
