import { DefaultTheme } from 'styled-components';
import pattern from '.';

const dark: DefaultTheme = {
  ...pattern,
  colors: {
    error: '#ff0033',
    background: '#141414',
    text: '#f6f8ff',
    elements: '#3D4766',
    effects: {
      themeSwitcherBackground: '#282828',
    },
  },
};

export default dark;
