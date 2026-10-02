import { createNewGameButton } from './new-game-button';
import { createMovesStats } from './moves-stats';
import styles from '@/styles/modules/modal.module.scss';

export function createModal() {
  const dialog = document.createElement('dialog');
  dialog.id = 'modal';
  dialog.className = styles.modal;
  document.body.append(dialog);

  const modalContent = document.createElement('div');
  modalContent.className = styles.modalContent;
  modalContent.classList.add(styles.winModal);

  const h2 = document.createElement('h2');
  h2.className = styles.h2;
  h2.textContent = 'You win!';

  const stats = createMovesStats();

  const newGameButton = createNewGameButton();

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = styles.closeButton;
  closeButton.textContent = 'close';

  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();

    const isClickOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isClickOutside) {
      dialog.close();
    }
  });

  modalContent.append(h2, stats, newGameButton);

  dialog.append(closeButton, modalContent);
  return dialog;
}
