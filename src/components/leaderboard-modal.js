import { formatDate } from '@/utils/format-date';
import styles from '@/styles/modules/modal.module.scss';

export function createLeaderboardModal() {
  const leaderboard = document.createElement('div');
  leaderboard.className = styles.leaderboardModal;

  const h2 = document.createElement('h2');
  h2.className = styles.h2;
  h2.textContent = 'Leaderboard';

  const h3 = document.createElement('h3');
  h3.className = styles.h3;
  h3.textContent = 'No results yet';

  const table = document.createElement('table');
  table.className = styles.table;

  const header = document.createElement('tr');

  const place = document.createElement('th');
  place.textContent = 'Place';

  const moves = document.createElement('th');
  moves.textContent = 'Moves';

  const date = document.createElement('th');
  date.textContent = 'Date';

  header.append(place, moves, date);
  table.append(header);

  const results = localStorage.getItem('results')
    ? JSON.parse(localStorage.getItem('results'))
    : undefined;

  if (results) {
    for (const [index, result] of results.entries()) {
      const row = document.createElement('tr');
      row.className = styles.row;
      const place = document.createElement('td');
      place.textContent = index + 1;
      const moves = document.createElement('td');
      moves.textContent = result.moves;
      const date = document.createElement('td');
      date.textContent = formatDate(result.date);

      row.append(place, moves, date);

      table.append(row);
    }
  }

  leaderboard.append(h2, results ? table : h3);

  return leaderboard;
}
