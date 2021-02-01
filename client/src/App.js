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
              {/* VOLUNTEER ROUTES */}
              <Route
                exact
                path={navRoutes.VOLUNTEER.INDIVIDUAL_SKILL}
                Component={Pages.VolunteerIndividualSkill}
                layout="withoutHeader"
                goBack
              />

              <Route
                exact
                path={navRoutes.HQ.SUCCESS_EDIT_ACTIVITY}
                Component={Pages.SuccessUpdateActivity}
                layout="notification"
                headerIcon="success"
                goBack
              />

              <Route
                exact
                path={navRoutes.HQ.SUCCESS_ADD_ACTIVITY}
                Component={Pages.SuccessUpdateActivity}
                layout="notification"
                headerIcon="success"
                goBack
              />

              <Route
                exact
                path={navRoutes.HQ.ADD_ACTIVITY}
                Component={Pages.UpdateActivity}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="form"
              />

              <Route
                exact
                path={navRoutes.HQ.EDIT_ACTIVITY}
                Component={Pages.UpdateActivity}
                isPrivate
                allowedRoles={[roles.HQ]}
                layout="form"
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
                path={navRoutes.HQ.HOME}
                Component={() => <Pages.HQLanding />}
                layout="withoutHeader"
              />
              <Route
                exact
                path={navRoutes.GENERAL.ASSESSMENT_STEP}
                Component={() => <Pages.Assessment />}
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

              <Route
                exact
                path={navRoutes.GENERAL.ACTIVITY_COMPLETED}
                Component={Pages.ActivityCompleted}
                layout="notification"
                hideHeader
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
              />
              <Route
                exact
                path={navRoutes.VOLUNTEER.RECOMMENDED_SKILLS}
                Component={Pages.RecommendedSkills}
                layout="withoutHeader"
              />

              <Route
                exact
                path={navRoutes.VOLUNTEER.PROGRESS}
                Component={Pages.TrainingProgress}
                layout="notification"
                hideHeader
              />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
