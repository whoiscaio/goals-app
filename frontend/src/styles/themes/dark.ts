import { DefaultTheme } from 'styled-components';
import pattern from '.';

const dark: DefaultTheme = {
  colors: {
    background: '#141414',
    text: '#f6f8ff',
    elements: '#3D4766',
    effects: {
      themeSwitcherBackground: '#282828',
    }
  },
  ...pattern,
}

export default dark;