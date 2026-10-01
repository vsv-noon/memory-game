export function fisherYatesShuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const index_ = Math.floor(Math.random() * (index + 1));

    const temporary = array[index];
    array[index] = array[index_];
    array[index_] = temporary;
  }
  return array;
}
