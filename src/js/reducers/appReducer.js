import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import userReducer from 'js/reducers/userReducer';
import usersReducer from 'js/reducers/usersReducer';
import tasksReducer from 'js/reducers/tasksReducer';
import statusesReducer from 'js/reducers/statusesReducer';
import prioritiesReducer from 'js/reducers/prioritiesReducer';
import currentTaskReducer from 'js/reducers/currentTaskReducer';

export default combineReducers({
    form: formReducer,
    statuses: statusesReducer,
    priorities: prioritiesReducer,
    user: userReducer,
    tasks: tasksReducer,
    users: usersReducer,
    currentTask: currentTaskReducer
});
