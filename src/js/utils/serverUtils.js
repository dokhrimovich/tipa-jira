import storageUtils from 'js/utils/storageUtils';
import { statusesMock, tasksMock, usersMock } from 'js/constants/serverMocks';

const fakeServerDelay = 200;

const getPreviewTask = (data) => {
    const previewProps = ['id', 'title', 'status', 'assignedTo', 'priority'];

    return Object.keys(data)
        .filter(key => previewProps.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];

            return obj;
        }, {});
};

const getPreviewUsers = (data) => {
    const previewProps = ['id', 'name', 'avatar'];

    return Object.keys(data)
        .filter(key => previewProps.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];

            return obj;
        }, {});
};

const getServerFakeResponse = (action) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => action(resolve, reject), fakeServerDelay);
    });
};

export const init = () => getServerFakeResponse((resolve) => {
    if (storageUtils.getItem('fake.server.initialized')) {
        resolve();

        return;
    }

    storageUtils.setItem('fake.server.statuses', statusesMock);
    storageUtils.setItem('fake.server.tasks', tasksMock);
    storageUtils.setItem('fake.server.users', usersMock);
    storageUtils.setItem('fake.server.initialized', true);

    resolve();
});

export const loginByCredentials = (login, password) => getServerFakeResponse((resolve, reject) => {
    let users = storageUtils.getItem('fake.server.users');
    let user = users.find((u) => u.login === login && u.password === password);

    if (user) {
        user.authToken = 'AA2dS3477Yt';

        storageUtils.setItem('fake.server.users', users);
        storageUtils.setItem('fake.server.current_user', {
            login: user.login,
            authToken: user.authToken
        });

        resolve(user);
    } else {
        reject('auth error: wrong login or password')
    }
});

export const loginByToken = (token) => getServerFakeResponse((resolve, reject) => {
    let loggedUser = storageUtils.getItem('fake.server.current_user');

    if (loggedUser.authToken === token) {
        let users = storageUtils.getItem('fake.server.users');
        let user = users.find((u) => u.login === loggedUser.login);

        resolve(user);
    } else {
        reject('auth error: token expired')
    }
});

export const logout = () => getServerFakeResponse((resolve) => {
    let currentUser = storageUtils.getItem('fake.server.current_user');
    let users = storageUtils.getItem('fake.server.users');
    let user = users.find((u) => u.login === currentUser.login);

    if (user) {
        delete user.authToken;

        storageUtils.setItem('fake.server.users', users);
        storageUtils.removeItem('fake.server.current_user');
    }

    resolve();
});

export const fetchStatuses = () => getServerFakeResponse((resolve) => {
    let statuses = storageUtils.getItem('fake.server.statuses');

    resolve(statuses);
});

export const fetchUsers = () => getServerFakeResponse((resolve, reject) => {
    let rawUsers = storageUtils.getItem('fake.server.users');
    let users = rawUsers.map(getPreviewUsers);

    resolve(users);
});

export const fetchTasks = () => getServerFakeResponse((resolve, reject) => {
    let rawTasks = storageUtils.getItem('fake.server.tasks');
    let tasks = rawTasks.map(getPreviewTask);

    resolve(tasks);
});

export const fetchTask = (id) => getServerFakeResponse((resolve, reject) => {
    let rawTasks = storageUtils.getItem('fake.server.tasks');
    let task = rawTasks.find((t) => t.id === id);

    if (task) {
        resolve(task);
    } else {
        reject(`Task [id=${id}]not found`);
    }
});

export default {
    init,
    loginByCredentials,
    loginByToken,
    logout,
    fetchStatuses,
    fetchUsers,
    fetchTasks,
    fetchTask
};
