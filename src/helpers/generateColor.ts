import { generateRandom } from './generateRandom';

/**
 * Generates a random hex color code.
 * @returns {string} The hex color code in the format '#RRGGBB'
 */
export const generateColorHex = () =>
  `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

/**
 * Generates a light color in HSLA format (Hue, Saturation, Lightness, Alpha)
 * with the following constraints:
 * - Hue: between 0 and 360 degrees
 * - Saturation: between 25% and 95%
 * - Lightness: between 85% and 100%
 * - Alpha: 60% (medium transparency)
 */
export const generateLightColorHsla = () =>
  `hsla(${generateRandom(0, 360)},${generateRandom(25, 95)}%,${generateRandom(
    85,
    100
  )}%, 0.6)`;
