// * a function that recieves an array and batches it ...
// * ... into smaller arrays with option of number of ...
// * ... items per array and number of batches
export const batchArray = (
  array = ['empty', 'array'],
  divider = 1,
  requiredNum = Math.floor(array.length / divider)
) => {
  const possibleNumOfBatches = Math.floor(array.length / divider) || 1;
  const numOfBatches =
    requiredNum > possibleNumOfBatches ? possibleNumOfBatches : requiredNum;
  const totalBatches =
    array.length % divider === 0 ? numOfBatches : numOfBatches + 1;
  console.log(totalBatches);

  const batches = [];
  let range = 0;
  for (let i = 0; i < totalBatches; i++) {
    const val = array.slice(range, range + divider);
    range += divider;
    batches.push(val);
  }
  return batches;
};
