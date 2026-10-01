import { createShuffledArray } from '@/utils/create-shuffled-array';

import styles from '@/styles/modules/main.module.scss';

export function createCardsBoard() {
  const shuffled = createShuffledArray();

  const cardsBoard = document.createElement('div');
  cardsBoard.id = 'cardsBoard';
  cardsBoard.className = styles.cardsBoard;

  for (const item of shuffled) {
    const card = document.createElement('div');
    card.className = styles.card;

    const icon = document.createElement('i');
    icon.className = styles.icon;
    icon.classList.add('fa-solid', item);

    card.append(icon);
    cardsBoard.append(card);
  }

  return cardsBoard;
}
