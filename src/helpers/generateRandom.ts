/**
 * Generates a random number between min and max (inclusive)
 * @param number [min=0] The minimum number
 * @param number [max=100] The maximum number
 * @returns number: The random number
 */
export const generateRandom = (min = 0, max = 100) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
