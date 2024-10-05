// shortens a string and adds ellipses
export const truncateString = (word: string, limit: number = 7) => {
  if (word.length <= limit) return word;
  return word.slice(0, limit) + '...';
};