import storageUtils from 'js/utils/storageUtils';
import mocks from 'js/utils/serverMocks';

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

const fakeServerResponse = (action) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => action(resolve, reject), fakeServerDelay);
    });
};

export const init = () => fakeServerResponse((resolve) => {
    if (storageUtils.getItem('fake.server.initialized')) {
        resolve();

        return;
    }

    storageUtils.setItem('fake.server.statuses', mocks.statusesMock);
    storageUtils.setItem('fake.server.priorities', mocks.prioritiesMock);
    storageUtils.setItem('fake.server.tasks', mocks.tasksMock);
    storageUtils.setItem('fake.server.users', mocks.usersMock);
    storageUtils.setItem('fake.server.initialized', true);

    resolve();
});

export const loginByCredentials = (login, password) => fakeServerResponse((resolve, reject) => {
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

export const loginByToken = (token) => fakeServerResponse((resolve, reject) => {
    let loggedUser = storageUtils.getItem('fake.server.current_user');

    if (loggedUser.authToken === token) {
        let users = storageUtils.getItem('fake.server.users');
        let user = users.find((u) => u.login === loggedUser.login);

        resolve(user);
    } else {
        reject('auth error: token expired')
    }
});

export const logout = () => fakeServerResponse((resolve) => {
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

export const fetchStatuses = () => fakeServerResponse((resolve) => {
    let statuses = storageUtils.getItem('fake.server.statuses');

    resolve(statuses);
});

export const fetchPriorities = () => fakeServerResponse((resolve) => {
    let priorities = storageUtils.getItem('fake.server.priorities');

    resolve(priorities);
});

export const fetchUsers = () => fakeServerResponse((resolve, reject) => {
    let rawUsers = storageUtils.getItem('fake.server.users');
    let users = rawUsers.map(getPreviewUsers);

    resolve(users);
});

export const fetchTasks = () => fakeServerResponse((resolve, reject) => {
    let rawTasks = storageUtils.getItem('fake.server.tasks');
    let tasks = rawTasks.map(getPreviewTask);

    resolve(tasks);
});

export const fetchTask = (id) => fakeServerResponse((resolve, reject) => {
    let taskId = Number(id);
    let rawTasks = storageUtils.getItem('fake.server.tasks');
    let task = rawTasks.find((t) => t.id === taskId);

    if (task) {
        resolve(task);
    } else {
        reject(`Task [id=${id}]not found`);
    }
});

export const updateTask = (taskData) => fakeServerResponse((resolve, reject) => {
    if (!taskData || !('id' in taskData)) {
        reject(`Task update error. Task data has no id`);

        return;
    }

    let taskId = Number(taskData.id);
    let rawTasks = storageUtils.getItem('fake.server.tasks');
    let task = rawTasks.find((t) => t.id === taskId);

    if (!task) {
        reject(`Task update error. Task [id=${id}] not found`);

        return;
    }

    Object.assign(task, taskData);

    storageUtils.setItem('fake.server.tasks', rawTasks);

    resolve(task);
});

export default {
    init,
    loginByCredentials,
    loginByToken,
    logout,
    fetchStatuses,
    fetchPriorities,
    fetchUsers,
    fetchTasks,
    fetchTask,
    updateTask
};
