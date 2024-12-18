/**
 * Generates an array of numbers from start to end, incrementing by step.
 * If end is not given, start is used as the end and start is set to 0.
 * @param start - The starting number.
 * @param [end] - The ending number.
 * @param [step=1] - The incrementing step.
 * @returns  An array of numbers.
 */
export function range(start: number, end: number, step = 1) {
  const output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}
