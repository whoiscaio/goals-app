import { DefaultTheme } from 'styled-components';
import pattern from '.';

const light: DefaultTheme = {
  ...pattern,
  colors: {
    error: '#cc0000',
    background: '#f6f8ff',
    text: '#121212',
    elements: '#A3BCF9',
    effects: {
      themeSwitcherBackground: '#d6d6d6',
      invertedButtonBackground: '#282828',
    },
  },
}

export default light;