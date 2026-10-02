import { cardIcons } from '@/constants/cards';
import { fisherYatesShuffle } from './shuffle';

export function createShuffledArray() {
  const duplicate = [...cardIcons, ...cardIcons];

  const shuffled = fisherYatesShuffle(duplicate);

  return shuffled;
}
