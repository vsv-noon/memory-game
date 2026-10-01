import { startNewGame } from '@/utils/start-new-game';
import styles from '@/styles/modules/header.module.scss';
import { totalPairs } from '@/constants/constants';
import { gameState } from './main';

export function createHeader() {

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
  statsSpan.id = 'moves';
  statsSpan.className = styles.movesSpan;
  statsSpan.textContent = gameState.moves;

  stats.append(statsSpan);

  const pairsDiv = document.createElement('div');
  pairsDiv.className = styles.pairs;
  pairsDiv.textContent = 'Matches: ';
  const pairsSpan = document.createElement('span');
  pairsSpan.id = 'matches';
  pairsSpan.className = styles.pairsSpan;
  pairsSpan.textContent = gameState.matches;
  pairsDiv.append(pairsSpan, ` from ${totalPairs}`);

  newGameButton.addEventListener('click', () => {
    gameState.moves = 0;
    gameState.matches = 0;
    statsSpan.textContent = '0';
    pairsSpan.textContent = '0';
    startNewGame();
  });

  header.append(newGameButton, leaderboard, stats, pairsDiv);

  return header;
}
