/**
 * Format a number with commas and an optional decimal place.
 * @param number The number to format.
 * @param decimalPlace The number of decimal places to round to.
 * @returns A string representation of the number with commas and the specified decimal places.
 */
export function separateNumberByComma(
  number: number,
  decimalPlace?: number
): string {
  const num = typeof number === 'string' ? parseFloat(number) : number;

  const [integer, decimal = ''] = num.toFixed(decimalPlace || 0).split('.');
  const hasDecimals = decimalPlace != null && decimal !== '0';

  return (
    integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    (hasDecimals ? `.${decimal}` : '')
  );
}
