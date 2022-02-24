import { DefaultTheme } from 'styled-components';
import pattern from '.';

const light: DefaultTheme = {
  colors: {
    background: '#f7f7f7',
    text: '#121212',
    elements: '#A3BCF9',
    effects: {
      themeSwitcherBackground: '#d6d6d6',
    }
  },
  ...pattern,
}

export default light;