/**
 * Truncates a given string to a specified length, adding an ellipsis to the
 * end if the string is longer than the limit.
 *
 * @param string word The string to be truncated.
 * @param number [limit=7] The maximum length of the string.
 * @returns string
 */
export const truncateString = (word: string, limit: number = 7) => {
  if (word.length <= limit) return word;
  return word.slice(0, limit) + '...';
};
