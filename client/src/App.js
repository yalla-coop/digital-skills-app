import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route } from './components';
import * as Pages from './pages';
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

              {/* HQ routes */}
              <Route
                exact
                path={navRoutes.HQ.VOLUNTEERS}
                Component={Pages.HqVolunteersStats}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.HQ.MANAGE_SKILLS}
                Component={Pages.SkillAreas}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.HQ.INDIVIDUAL_SKILL_AREA}
                Component={Pages.IndividualSkillArea}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.HQ.DASHBOARD}
                Component={Pages.HqDashboard}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.HQ.SKILLS_PROGRESS}
                Component={Pages.HqSkillsProgress}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />
              <Route
                exact
                path={navRoutes.HQ.INDIVIDUAL_SKILL}
                Component={Pages.HqIndividualSkill}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.HQ.SUCCESS_UPDATE_ACTIVITY}
                Component={Pages.SuccessUpdateActivity}
                layout="notification"
                headerIcon="success"
                goBack
              />

              {/* General routes */}
              <Route
                exact
                path={navRoutes.GENERAL.SEARCH}
                Component={Pages.Search}
                layout="withoutHeader"
                withoutPaddings
              />
              <Route
                exact
                path={navRoutes.GENERAL.HOME}
                Component={() => <Pages.VolunteerLanding />}
                layout="withoutHeader"
              />
              <Route
                exact
                path={navRoutes.VOLUNTEER.ENTER_POSTCODE}
                Component={() => <Pages.PostcodePage />}
                layout="page"
              />
              <Route
                exact
                path={navRoutes.HQ.HOME}
                Component={() => <Pages.HQLanding />}
                layout="withoutHeader"
              />
              <Route
                exact
                path={navRoutes.GENERAL.ASSESSMENT}
                Component={Pages.TestLanding}
                layout="general"
                headerIcon="darts"
                goBack
              />
              {/* VOLUNTEERS ROUTES */}
              <Route
                exact
                path={navRoutes.GENERAL.HELP_OTHERS}
                Component={Pages.HelpOthers}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.VOLUNTEER.DASHBOARD}
                Component={Pages.VolunteerDashboard}
                layout="withoutHeader"
                isPrivate
                allowedRoles={[roles.VOLUNTEER]}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
