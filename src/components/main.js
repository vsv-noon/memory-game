import styles from '@/styles/modules/main.module.scss';

const icons = [
  'fa-anchor',
  'fa-bug',
  'fa-car',
  'fa-envelope',
  'fa-heart',
  'fa-house',
  'fa-plane',
  'fa-user',
];

export function createMain() {
  const main = document.createElement('main');
  main.className = styles.main;

  const h1 = document.createElement('h1');
  h1.className = styles.h1;
  h1.textContent = 'Memory Game';

  const duplicate = [...icons, ...icons];

  const cardsContainer = document.createElement('div');
  cardsContainer.className = styles.cardsContainer;

  for (const item of duplicate) {
    const card = document.createElement('div');
    card.className = styles.card;

    const icon = document.createElement('i');
    icon.className = styles.icon;
    icon.classList.add('fa-solid', item);

    card.append(icon);
    cardsContainer.append(card);
  }

  main.append(h1, cardsContainer);

  return main;
}
