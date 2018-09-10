import serverUtils from 'js/utils/serverUtils';
import storageUtils from 'js/utils/storageUtils';
import actionType from 'js/constants/actionTypes';

const loginAction = (dispatch, user)  => {
    storageUtils.setItem('autoToken', user.authToken);

    dispatch({ type: actionType.LOGIN, data: user });
};

export const initApp = (dispatch) => {
    serverUtils.init()
        .then(() => {
            serverUtils.fetchStatuses()
                .then((statuses) => dispatch({ type: actionType.SET_STATUSES, data: statuses }));

            serverUtils.fetchPriorities()
                .then((priorities) => dispatch({ type: actionType.SET_PRIORITIES, data: priorities }));

            serverUtils.fetchTasks()
                .then((tasks) => dispatch({ type: actionType.SET_TASKS, data: tasks }));

            serverUtils.fetchUsers()
                .then((users) => dispatch({ type: actionType.SET_USERS, data: users }));

            loginByToken(dispatch);
        });
};

export const loginByCredentials = (dispatch, login, password) => {
    return serverUtils.loginByCredentials(login, password)
        .then((user) => loginAction(dispatch, user));
};

export const loginByToken = (dispatch) => {
    let token = storageUtils.getItem('autoToken');

    if (token) {
        return serverUtils.loginByToken(token)
            .then((user) => loginAction(dispatch, user));
    }

    return Promise.reject('Token not found').catch((e) => {});
};

export const logout = (dispatch) => {
    return serverUtils.logout()
        .then(() => {
            storageUtils.removeItem('autoToken');

            dispatch({ type: actionType.LOGOUT });
        });
};

export const setActiveTask = (dispatch, id) => serverUtils.fetchTask(id)
    .then(
        (task) => dispatch({ type: actionType.SET_CURRENT_TASK, data: task }),
        (error) => dropActiveTask(dispatch)
    );

export const dropActiveTask = (dispatch) => {
    dispatch({ type: actionType.SET_CURRENT_TASK, data: {} });
};

export const updateTask = (dispatch, data) => {
    serverUtils.updateTask(data)
        .then(
            (task) => dispatch({ type: actionType.SET_CURRENT_TASK, task }),
            (error) => dispatch({ type: actionType.SET_CURRENT_TASK, data })
        );
};

export default {
    initApp,
    loginByCredentials,
    loginByToken,
    logout,
    setActiveTask,
    dropActiveTask,
    updateTask
};
