import { gameState } from './main';
import styles from '@/styles/modules/header.module.scss';

export function createMovesStats() {
  const stats = document.createElement('div');
  stats.className = styles.stats;
  stats.textContent = 'Moves: ';
  const statsSpan = document.createElement('span');
  statsSpan.id = 'moves';
  statsSpan.className = styles.movesSpan;
  if (gameState) {

    statsSpan.textContent = gameState.moves;
  }

  stats.append(statsSpan);

  return stats;
}
