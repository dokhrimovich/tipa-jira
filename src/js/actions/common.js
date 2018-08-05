import * as actionType from "../constants/actionTypes";
import * as serverUtils from '../utils/serverUtils';

export const initApp = (dispatch) => {
    serverUtils.fetchStatuses()
        .then((statuses) => dispatch({ type: actionType.SET_STATUSES, data: statuses }));

    serverUtils.fetchTasks()
        .then((tasks) => dispatch({ type: actionType.SET_TASKS, data: tasks }));
};

export const login = (dispatch, userName, password) => {
    return serverUtils.login(userName, password)
        .then((user) => dispatch({ type: actionType.LOGIN, data: user }));
};

export const logout = (dispatch) => {
    return serverUtils.logout()
        .then(() => dispatch({ type: actionType.LOGOUT }));
};
