import { DefaultTheme } from 'styled-components';

type ColorKeys = keyof DefaultTheme['color'];
type FontWeightKeys = keyof DefaultTheme['fontWeight'];
type BreakpointKeys = keyof DefaultTheme['breakpoint'];

export const getColor =
  (key: ColorKeys) => (props: { theme: DefaultTheme }) => {
    return props.theme.color[key];
  };

export const getFontWeight =
  (key: FontWeightKeys) => (props: { theme: DefaultTheme }) => {
    return props.theme.fontWeight[key];
  };

export const getBreakpoint =
  (key: BreakpointKeys) => (props: { theme: DefaultTheme }) => {
    return props.theme.breakpoint[key];
  };
