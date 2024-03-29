import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Router from './components/Router';
import { PageWrapper } from './pages/styles';
import GlobalStyle from './styles/GlobalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'theme');

  function toggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <GlobalStyle />
        <div className="App">
          <Header currentTheme={theme} themeSwitcher={toggleTheme} />
          <PageWrapper> 
            <Router currentTheme={theme} />
          </PageWrapper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
