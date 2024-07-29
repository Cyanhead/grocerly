export const theme = {
  color: {
    primary: '#3BB77E',
    primaryLite: '#DEF9EC',
    primaryHover: '#3bd073',

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
