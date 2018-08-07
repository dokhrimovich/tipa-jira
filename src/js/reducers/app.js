import { combineReducers } from 'redux';
import statuses from './statuses';
import user from './user';
import users from './users';
import tasks from './tasks';
import currentTask from './currentTask';

export default combineReducers({ statuses, user, tasks, users, currentTask });

