import * as actionType from "../constants/actionTypes";
import * as serverUtils from '../utils/serverUtils';

export const initApp = (dispatch) => {
    serverUtils.init()
        .then(() => {
            serverUtils.fetchStatuses()
                .then((statuses) => dispatch({ type: actionType.SET_STATUSES, data: statuses }));

            serverUtils.fetchTasks()
                .then((tasks) => dispatch({ type: actionType.SET_TASKS, data: tasks }));

            serverUtils.fetchUsers()
                .then((users) => dispatch({ type: actionType.SET_USERS, data: users }));
        });
};

export const login = (dispatch, login, password) => {
    return serverUtils.login(login, password)
        .then((user) => dispatch({ type: actionType.LOGIN, data: user }));
};

export const logout = (dispatch) => {
    return serverUtils.logout()
        .then(() => dispatch({ type: actionType.LOGOUT }));
};

export const setActiveTask = (dispatch, id) => {
    serverUtils.fetchTask(id)
        .then(
            (task) => dispatch({ type: actionType.SET_CURRENT_TASK, data: task }),
            (error) => dispatch({ type: actionType.SET_CURRENT_TASK, data: {} })
        );
};

export default {
    initApp,
    login,
    logout,
    setActiveTask
};
