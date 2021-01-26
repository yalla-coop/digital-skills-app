const GENERAL = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  ASSESSMENT: '/digital-test',
  DOING_TEST: `/digital-test/:step`,
  HELP_OTHERS: '/help-others',
};

const VOLUNTEER = {
  SIGNUP: '/signup',
  WELCOME: '/welcome',
  DASHBOARD: '/dashboard',
};

const HQBased = '/hq';

const HQ = {
  HOME: HQBased,
  SIGNUP: `${HQBased}/signup`,
  WELCOME: `${HQBased}/welcome`,
  DASHBOARD: `${HQBased}/dashboard`,
  MANAGE_SKILLS: `${HQBased}/manage-skills`,
  MANAGE_VOLUNTEERS: `${HQBased}/manage-volunteers`,
};

const EXTERNAL = {
  TERMS_OF_USE: 'https://www.google.com/',
  PRIVACY_POLICY: 'https://www.google.com/',
};

export { GENERAL, VOLUNTEER, HQ, EXTERNAL };
