import * as taskStatus from "./taskStatuses";

export let statusesMock = [{
    id: taskStatus.TODO,
    title: 'To do'
}, {
    id: taskStatus.IN_PROGRESS,
    title: 'In progress'
}, {
    id: taskStatus.CODE_REVIEW,
    title: 'Code review'
}, {
    id: taskStatus.TESTING,
    title: 'Testing'
}, {
    id: taskStatus.CLOSED,
    title: 'Closed'
}];

export const tasksMock = [{
    id: 1,
    title: 'Do something nice',
    assignedTo: 1,
    status: taskStatus.TODO
}, {
    id: 2,
    title: 'Implement working solution',
    assignedTo: 1,
    status: taskStatus.TODO
}, {
    id: 3,
    title: 'Fix bug',
    assignedTo: 1,
    status: taskStatus.TODO
}, {
    id: 4,
    title: 'Watch youtube',
    assignedTo: 1,
    status: taskStatus.IN_PROGRESS
}, {
    id: 5,
    title: 'Discover new memes',
    assignedTo: 1,
    status: taskStatus.CODE_REVIEW
}, {
    id: 6,
    title: 'Cure cancer',
    assignedTo: 1,
    status: taskStatus.TODO
}];

export const userMock = {
    id: 1,
    authToken: 'A12RR5',
    name: 'Kukuruzko',
    img: ''
};
