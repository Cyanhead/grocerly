/**
 *  Divides an array into smaller batches of a specified size.
 *
 *  @param {T[]} array - The input array to be divided into batches.
 *  @param {number} numOfItemsPerBatch - The number of items per batch.
 *  @return {T[][]} An array of arrays, where each inner array is a batch of the input array.
 */
export function divideArrayIntoBatches<T>(
  array: T[],
  numOfItemsPerBatch: number
): T[][] {
  let start = 0;
  const numOfBatches = Math.ceil(array.length / numOfItemsPerBatch);

  const result: T[][] = [];

  for (let i = 0; i < numOfBatches; i++) {
    result.push(array.slice(start, start + numOfItemsPerBatch));
    start += numOfItemsPerBatch;
  }

  return result;
}
