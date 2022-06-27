import generateRandom from './generateRandom';

// generate any color from #100000 to #ffffff
export const generateColorHex = () => {
  let randomColor = generateRandom(1048576, 16777215).toString(16);
  return `#${randomColor}`;
};

// generate any bright color in hsla format taken from https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
export const generateLightColorHsla = () => {
  return (
    'hsla(' +
    Math.floor(360 * Math.random()) +
    ',' +
    Math.floor(25 + 70 * Math.random()) +
    '%,' +
    Math.floor(85 + 10 * Math.random()) +
    '%, 0.6)'
  );
};
