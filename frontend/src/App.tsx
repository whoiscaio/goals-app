import Header from './components/Header';
import Router from './components/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Router />
      </div>
    </>
  );
}

export default App;
