export const theme = {
  color: {
    primary: '#3BB77E',
    primary50: '#e1fcf0',
    primary100: '#bfedd8',
    primary200: '#9ce1c1',
    primary300: '#76d3a9',
    primary400: '#51c791',
    primary500: '#38ae77',
    primary600: '#2a875d',
    primary700: '#1a6041',
    primary800: '#0b3b26',
    primary900: '#001509',

    accent: '#FFB531',

    black: '#253D4E',
    white: '#fff',

    grey: '#adadad',
    greyBg1: '#fafafa',
    greyBg2: '#f3f3f3',
    greyHover: '#eeeeeebb',
    greyActive: '#ddddddbb',

    faintLine: '1px solid rgba(0, 0, 0, 0.1)',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  breakpoint: {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px',
    xs: '480px',
  },
} as const;

export type ThemeType = typeof theme;
