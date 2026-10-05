import { gameState } from './main';
import { createMovesStats } from './moves-stats';
import { createNewGameButton } from './new-game-button';
import { createModal } from './modal';
import { createLeaderboardModal } from './leaderboard-modal';

import styles from '@/styles/modules/header.module.scss';

export function createHeader() {
  const header = document.createElement('header');
  header.className = styles.header;

  const newGameButton = createNewGameButton();

  const leaderboard = document.createElement('button');
  leaderboard.type = 'button';
  leaderboard.className = styles.leaderboard;
  leaderboard.textContent = 'Leaderboard';

  leaderboard.addEventListener('click', () => {
    const dialog = createModal();
    const leaderboardModal = createLeaderboardModal();
    dialog.open(leaderboardModal);
  });

  const stats = createMovesStats();

  const pairsDiv = document.createElement('div');
  pairsDiv.className = styles.pairs;
  pairsDiv.textContent = 'Matches: ';
  const pairsSpan = document.createElement('span');
  pairsSpan.id = 'matches';
  pairsSpan.className = styles.pairsSpan;
  pairsSpan.textContent = gameState.matches;
  pairsDiv.append(pairsSpan, ` from ${gameState.totalPairs}`);

  header.append(newGameButton, leaderboard, stats, pairsDiv);

  return header;
}
