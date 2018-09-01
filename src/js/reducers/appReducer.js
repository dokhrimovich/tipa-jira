import { combineReducers } from 'redux';
import statusesReducer from './statusesReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import tasksReducer from './tasksReducer';
import currentTaskReducer from './currentTaskReducer';

export default combineReducers({ statuses: statusesReducer, user: userReducer, tasks: tasksReducer, users: usersReducer, currentTask: currentTaskReducer });

