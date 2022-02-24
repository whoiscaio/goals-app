import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      text: string,
    },
    measures: {
      borderRadius: string,
      boxShadow: string,
    }
  }
}