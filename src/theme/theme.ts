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

    danger50: '#ffe2e2',
    danger100: '#ffb1b2',
    danger200: '#ff7f7f',
    danger300: '#ff4d4d',
    danger400: '#fe1d1b',
    danger500: '#e50501',
    danger600: '#b30000',
    danger700: '#810000',
    danger800: '#4f0000',
    danger900: '#200000',

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
