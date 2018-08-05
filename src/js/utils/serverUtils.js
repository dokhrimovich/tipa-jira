import { statusesMock, tasksMock, userMock } from '../constants/serverMocks';

const fakeServerDelay = 200;

export const fetchStatuses = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve(statusesMock), fakeServerDelay);
    });
};

export const login = (userName, password) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            if (userName === userMock.name && password === '777') {
                resolve(userMock);
            } else {
                reject('auth error');
            }
        }, fakeServerDelay);
    });
};

export const logout = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve(), fakeServerDelay);
    });
};

export const fetchTasks = () => {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve(tasksMock), fakeServerDelay);
    });
};
