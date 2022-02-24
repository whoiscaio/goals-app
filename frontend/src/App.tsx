import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Router from './components/Router';
import GlobalStyle from './styles/GlobalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState<string>('light');

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <Router />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
