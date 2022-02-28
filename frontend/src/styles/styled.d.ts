import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      text: string,
      elements: string,
      error: string,
      effects: {
        themeSwitcherBackground: string,
        invertedButtonBackground: string,
      }
    },
    measures: {
      borderRadius: string,
      boxShadow: string,
    }
  }
}