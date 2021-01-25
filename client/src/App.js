import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Pages from './pages';
import theme, { globalStyle } from './theme';
import { Route } from './components';
import { navRoutes, roles } from './constants';
import { AuthProvider } from './context/auth';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                isPrivate
                allowedRoles={[roles.VOLUNTEER, roles.HQ]}
                Component={() => <Pages.Example onLogin={() => {}} />}
                layout="notification"
                headerIcon="email"
              />
              {/* Auth Routes */}
              <Route
                exact
                path={navRoutes.VOLUNTEER.SIGNUP}
                Component={Pages.VolunteerSignup}
                layout="withBlocks"
              />
              <Route
                exact
                path={navRoutes.HQ.SIGNUP}
                Component={Pages.HQSignup}
                layout="withBlocks"
              />
              <Route
                exact
                path={navRoutes.GENERAL.LOGIN}
                Component={Pages.Login}
                layout="withBlocks"
              />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
