import { statusesMock, tasksMock, usersMock } from '../constants/serverMocks';
import storageUtils from './storageUtils';

const fakeServerDelay = 200;

export const init = () => {
    return new Promise((resolve) => {
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
};

export const login = (login, password) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
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
                reject('auth error')
            }
        }, fakeServerDelay);
    });
};

export const logout = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            let currentUser = storageUtils.getItem('fake.server.current_user');
            let users = storageUtils.getItem('fake.server.users');
            let user = users.find((u) => u.login === currentUser.login);

            if (user) {
                delete user.authToken;

                storageUtils.setItem('fake.server.users', users);
                storageUtils.removeItem('fake.server.current_user');
            }

            resolve();

        }, fakeServerDelay);
    });
};

export const fetchStatuses = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            let statuses = storageUtils.getItem('fake.server.statuses');

            resolve(statuses);
        }, fakeServerDelay);
    });
};

export const fetchUsers = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            let rawUsers = storageUtils.getItem('fake.server.users');
            let users = rawUsers.map(getPreviewUsers);

            resolve(users);
        }, fakeServerDelay);
    });
};

export const fetchTasks = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            let rawTasks = storageUtils.getItem('fake.server.tasks');
            let tasks = rawTasks.map(getPreviewTask);

            resolve(tasks);
        }, fakeServerDelay);
    });
};

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