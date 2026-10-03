import { createNewGameButton } from './new-game-button';
import { createMovesStats } from './moves-stats';
import styles from '@/styles/modules/modal.module.scss';

export function createWinModal() {
  const modalContent = document.createElement('div');
  modalContent.className = styles.modalContent;
  modalContent.classList.add(styles.winModal);

  const h2 = document.createElement('h2');
  h2.className = styles.h2;
  h2.textContent = 'You win!';

  const stats = createMovesStats();

  const newGameButton = createNewGameButton();

  modalContent.append(h2, stats, newGameButton);

  return modalContent;
}
