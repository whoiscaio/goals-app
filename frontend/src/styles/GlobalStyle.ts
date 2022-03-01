import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, Lato, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    @media (max-width: 1200px) {
      font-size: 60%;
    }

    @media (max-width: 800px) {
      font-size: 57.5%;
    }
  }

  html, body {
    background: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: 0;
  }
`;