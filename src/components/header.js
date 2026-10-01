import styles from '@/styles/modules/header.module.scss';

export function createHeader() {
  const header = document.createElement('header');
  header.className = styles.header;

  const newGame = document.createElement('button');
  newGame.type = 'button';
  newGame.className = styles.newGame;
  newGame.textContent = 'New Game';

  const leaderboard = document.createElement('button');
  leaderboard.type = 'button';
  leaderboard.className = styles.leaderboard;
  leaderboard.textContent = 'Leaderboard';

  const moves = document.createElement('div');
  moves.className = styles.moves;
  moves.textContent = 'Moves: ';
  const span = document.createElement('span');
  span.className = styles.span;

  moves.append(span);

  const pairs = document.createElement('div');
  pairs.className = styles.pairs;
  pairs.textContent = 'Pairs: ';

  header.append(newGame, leaderboard, moves, pairs);

  return header;
}
