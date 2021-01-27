const GENERAL = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  SEARCH: '/search',
  LOGOUT: '/logout',
  SUPPORT_OTHERS: '/support-others',
  SKILLS: '/skills',
  SUPPORT: '/support',
  ASSESSMENT: '/digital-test',
  DOING_TEST: `/digital-test/:step`,
  HELP_OTHERS: '/help-others',
  SKILL: '/skill/:id',
  ACTIVITY: '/activity/:id',
};

const VOLUNTEER = {
  SIGNUP: '/signup',
  WELCOME: '/welcome',
  DASHBOARD: '/dashboard',
  ENTER_POSTCODE: '/postcode',
  RESULTS: '/result',
  SETTINGS: '/settings',
};

const HQBased = '/hq';

const HQ = {
  HOME: HQBased,
  SIGNUP: `${HQBased}/signup`,
  WELCOME: `${HQBased}/welcome`,
  DASHBOARD: `${HQBased}/dashboard`,
  VOLUNTEERS: `${HQBased}/volunteers`,
  MANAGE_SKILLS: `${HQBased}/manage-skills`,
  DIGITAL_TOOL: `${HQBased}/digital-tool`,
  PROGRESS: `${HQBased}/progress`,
  MANAGE_VOLUNTEERS: `${HQBased}/manage-volunteers`,
  SKILLS_PROGRESS: `${HQBased}/skills-progress`,
};

const EXTERNAL = {
  TERMS_OF_USE: 'https://www.google.com/',
  PRIVACY_POLICY: 'https://www.google.com/',
  HELP: '/help', // in search page
  TERMS_AND_CONDITIONS: 'https://www.google.com/',
};

const VOLUNTEER_LOGGED_OUT = [
  { title: 'Home', to: GENERAL.HOME },
  { title: 'Test your digital skills', to: GENERAL.SKILLS },
  { title: 'Get help with a task', to: GENERAL.SUPPORT },
  { title: 'Support others', to: GENERAL.SUPPORT_OTHERS },
];

const VOLUNTEER_LOGGED_OUT_AUTH = [{ title: 'Log in', to: GENERAL.LOGIN }];

const VOLUNTEER_LOGGED_IN = [
  { title: 'My dashboard', to: VOLUNTEER.DASHBOARD },
  { title: 'Get help with a task', to: GENERAL.SUPPORT },
  { title: 'Support others', to: GENERAL.SUPPORT_OTHERS },
];

const VOLUNTEER_LOGGED_IN_AUTH = [
  { title: 'Log out', to: GENERAL.LOGOUT },
  { title: 'My account', to: VOLUNTEER.SETTINGS },
];

const HQ_USER_LOGGED_IN = [
  { title: 'Home', to: HQ.DASHBOARD },
  { title: 'My volunteers', to: HQ.VOLUNTEERS },
  { title: 'Progress', to: HQ.PROGRESS },
  { title: 'Manage skills', to: HQ.MANAGE_SKILLS },
  { title: 'View digital tool', to: HQ.DIGITAL_TOOL },
];

const HQ_USER_LOGGED_IN_AUTH = [{ title: 'Log out', to: GENERAL.LOGOUT }];

const HQ_USER_LOGGED_OUT = [{ title: 'Home', to: GENERAL.HOME }];

const HQ_USER_LOGGED_OUT_AUTH = [{ title: 'Log in', to: GENERAL.LOGIN }];

const NAV_ROUTES = {
  volunteer: {
    LOGGED_IN: [...VOLUNTEER_LOGGED_IN],
    LOGGED_IN_AUTH: [...VOLUNTEER_LOGGED_IN_AUTH],
    LOGGED_OUT: [...VOLUNTEER_LOGGED_OUT],
    LOGGED_OUT_AUTH: [...VOLUNTEER_LOGGED_OUT_AUTH],
  },
  HQUser: {
    LOGGED_IN: [...HQ_USER_LOGGED_IN],
    LOGGED_IN_AUTH: [...HQ_USER_LOGGED_IN_AUTH],
    LOGGED_OUT: [...HQ_USER_LOGGED_OUT],
    LOGGED_OUT_AUTH: [...HQ_USER_LOGGED_OUT_AUTH],
  },
};

export { GENERAL, VOLUNTEER, HQ, EXTERNAL, NAV_ROUTES };
