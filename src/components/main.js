import styles from '@/styles/modules/main.module.scss';

export function createMain() {
  const main = document.createElement('main');
  main.className = styles.main;

  const h1 = document.createElement('h1');
  h1.className = styles.h1;
  h1.textContent = 'Memory Game';

  main.append(h1);

  return main;
}