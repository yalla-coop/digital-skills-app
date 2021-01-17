import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Example from './pages/Example';
import theme, { globalStyle } from './theme';
import { Route } from './components';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
    setIsMounted(true);
  }, []);

  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route
              path="/"
              isLoggedIn={isLoggedIn}
              isMounted={isMounted}
              Component={() => <Example onLogin={() => {}} />}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
