import { startNewGame } from '@/utils/start-new-game';
import styles from '@/styles/modules/header.module.scss';
import { totalPairs } from '@/constants/constants';

export function createHeader() {
  let moves = 0;
  let matches = 0;

  const header = document.createElement('header');
  header.className = styles.header;

  const newGameButton = document.createElement('button');
  newGameButton.type = 'button';
  newGameButton.className = styles.newGameButton;
  newGameButton.textContent = 'New Game';

  const leaderboard = document.createElement('button');
  leaderboard.type = 'button';
  leaderboard.className = styles.leaderboard;
  leaderboard.textContent = 'Leaderboard';

  const stats = document.createElement('div');
  stats.className = styles.stats;
  stats.textContent = 'Moves: ';
  const statsSpan = document.createElement('span');
  statsSpan.className = styles.movesSpan;
  statsSpan.textContent = moves;

  stats.append(statsSpan);

  const pairsDiv = document.createElement('div');
  pairsDiv.className = styles.pairs;
  pairsDiv.textContent = 'Pairs: ';
  const pairsSpan = document.createElement('span');
  pairsSpan.className = styles.pairsSpan;
  pairsSpan.textContent = matches;
  pairsDiv.append(pairsSpan, ` from ${totalPairs}`);

  newGameButton.addEventListener('click', () => {
    moves = 0;
    matches = 0;
    statsSpan.textContent = '0';
    pairsSpan.textContent = '0';
    startNewGame();
  });

  header.append(newGameButton, leaderboard, stats, pairsDiv);

  return header;
}
