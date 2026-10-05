import { gameState } from './main';
import { startNewGame } from '@/utils/start-new-game';
import { resetCards } from './cards-board';
import styles from '@/styles/modules/button.module.scss';

export function createNewGameButton() {
  const newGameButton = document.createElement('button');
  newGameButton.type = 'button';
  newGameButton.className = styles.newGameButton;
  newGameButton.textContent = 'New Game';

  newGameButton.addEventListener('click', () => {
    gameState.moves = 0;
    gameState.matches = 0;
    document.querySelector('#moves').textContent = '0';
    document.querySelector('#matches').textContent = '0';
    dispatchEvent(new CustomEvent('app:modal-close'));

    resetCards();
    startNewGame();
  });

  return newGameButton;
}
