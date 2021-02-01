const GENERAL = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  SEARCH: '/search',
  LOGOUT: '/logout',
  SKILLS: '/skills',
  SUPPORT: '/support',
  ASSESSMENT: '/digital-test',
  ASSESSMENT_STEP: '/digital-test/:step',
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
  INDIVIDUAL_SKILL: `/skills/:id`,
  INDIVIDUAL_ACTIVITY: `/activities/:id`,
  RECOMMENDED_SKILLS: '/recommended-skills',
  SKILLS: '/skills',
};

const HQBase = '/hq';

const HQ = {
  HOME: HQBase,
  SIGNUP: `${HQBase}/signup`,
  WELCOME: `${HQBase}/welcome`,
  DASHBOARD: `${HQBase}/dashboard`,
  VOLUNTEERS: `${HQBase}/volunteers`,
  MANAGE_SKILLS: `${HQBase}/manage-skills`,
  DIGITAL_TOOL: `${HQBase}/digital-tool`,
  PROGRESS: `${HQBase}/progress`,
  MANAGE_VOLUNTEERS: `${HQBase}/manage-volunteers`,
  SKILLS_PROGRESS: `${HQBase}/skills-progress`,
  INDIVIDUAL_SKILL: `${HQBase}/skills/:id`,
  EDIT_ACTIVITY: `${HQBase}/activities/edit/:id`,
  ADD_ACTIVITY: `${HQBase}/activities/new`,
  SUCCESS_ADD_ACTIVITY: `${HQBase}/success-add-activity/:id`,
  SUCCESS_EDIT_ACTIVITY: `${HQBase}/success-edit-activity/:id`,
  INDIVIDUAL_SKILL_AREA: `${HQBase}/manage-skills/:id`,
  ADD_NEW_ACTIVITY: `${HQBase}/new-activity`,
};

const EXTERNAL = {
  TERMS_OF_USE: 'https://www.google.com/',
  PRIVACY_POLICY: 'https://www.google.com/',
  HELP: '/help', // in search page
  TERMS_AND_CONDITIONS: 'https://www.google.com/',
  COOKIES: 'https://www.google.com/',
};

const VOLUNTEER_LOGGED_OUT = [
  { title: 'Home', to: GENERAL.HOME },
  { title: 'Test your digital skills', to: GENERAL.ASSESSMENT },
  { title: 'Get help with a task', to: GENERAL.SEARCH },
  { title: 'Support others', to: GENERAL.HELP_OTHERS },
];

const VOLUNTEER_LOGGED_OUT_AUTH = [{ title: 'Log in', to: GENERAL.LOGIN }];

const VOLUNTEER_LOGGED_IN = [
  { title: 'My dashboard', to: VOLUNTEER.DASHBOARD },
  { title: 'Get help with a task', to: GENERAL.SEARCH },
  { title: 'Support others', to: GENERAL.HELP_OTHERS },
];

const VOLUNTEER_LOGGED_IN_AUTH = [
  { title: 'Log out', to: GENERAL.HOME, logout: true },
  { title: 'My account', to: VOLUNTEER.SETTINGS },
];

const HQ_USER_LOGGED_IN = [
  { title: 'Home', to: HQ.DASHBOARD },
  { title: 'My volunteers', to: HQ.VOLUNTEERS },
  { title: 'Progress', to: HQ.SKILLS_PROGRESS },
  { title: 'Manage skills', to: HQ.MANAGE_SKILLS },
  { title: 'View digital tool', to: HQ.DIGITAL_TOOL },
];

const HQ_USER_LOGGED_IN_AUTH = [
  { title: 'Log out', to: GENERAL.LOGOUT, logout: true },
];

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
