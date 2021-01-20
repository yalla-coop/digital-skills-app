import axios from 'axios';
import * as activities from './activities';
import * as checkIns from './check-ins';
import * as organisations from './organisations';
import * as users from './users';
import * as skills from './skills';

axios.defaults.baseURL = '/api';

export { activities, checkIns, organisations, users, skills };
