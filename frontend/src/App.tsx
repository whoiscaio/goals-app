import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Router from './components/Router';
import GlobalStyle from './styles/GlobalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState<string>('dark');

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ThemeProvider theme={ theme === 'dark' ? dark : light }>
          <Header />
          <Router />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
