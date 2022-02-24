import { DefaultTheme } from 'styled-components';
import pattern from '.';

const dark: DefaultTheme = {
  colors: {
    background: '#141414',
    text: '#f3f3f3',
    elements: '#3D4766',
    effects: {
      text: '#c2c2c2',
    }
  },
  ...pattern,
}

export default dark;