import styles from '@/styles/modules/modal.module.scss';

export function createLeaderboardModal() {
  const leaderboard = document.createElement('div');
  leaderboard.className = styles.leaderboard;

  const h2 = document.createElement('h2');
  h2.className = styles.h2;
  h2.textContent = 'Leaderboard';

  const h3 = document.createElement('h3');
  h3.className = styles.h3;
  h3.textContent = 'No results yet';

  const table = document.createElement('table');
  table.className = styles.table;

  const tr = document.createElement('tr');

  const place = document.createElement('th');
  place.textContent = 'Place';

  const moves = document.createElement('th');
  moves.textContent = 'Moves';

  const date = document.createElement('th');
  date.textContent = 'Date';

  tr.append(place, moves, date);

  table.append(tr);

  const results = localStorage.getItem('results');

  leaderboard.append(h2, results ? table : h3);

  return leaderboard;
}
