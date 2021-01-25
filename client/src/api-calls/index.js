import axios from 'axios';
import * as Activities from './activities';
import * as CheckIns from './check-ins';
import * as Organisations from './organisations';
import * as Users from './users';
import * as Skills from './skills';

axios.defaults.baseURL = '/api';

export { Activities, CheckIns, Organisations, Users, Skills };
