import taskStatus from 'js/constants/taskStatuses';
import taskPriority from 'js/constants/taskPriorities';

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

export let prioritiesMock = [{
    id: taskPriority.TO_BE_PRIORITIZED,
    title: 'To be prioritized'
}, {
    id: taskPriority.LOW,
    title: 'Low'
}, {
    id: taskPriority.MEDIUM,
    title: 'Medium'
}, {
    id: taskPriority.HIGH,
    title: 'High'
}, {
    id: taskPriority.CRITICAL,
    title: 'Critical'
}];

export const tasksMock = [{
    id: 1,
    title: 'Do something nice',
    assignedTo: 2,
    status: taskStatus.TODO,
    description: '',
    estimate: '',
    priority: taskPriority.MEDIUM,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}, {
    id: 2,
    title: 'Implement working solution',
    assignedTo: 3,
    status: taskStatus.TODO,
    description: '',
    estimate: '',
    priority: taskPriority.MEDIUM,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}, {
    id: 3,
    title: 'Fix bug',
    assignedTo: 4,
    status: taskStatus.TODO,
    description: '',
    estimate: '',
    priority: taskPriority.MEDIUM,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}, {
    id: 4,
    title: 'Watch youtube',
    assignedTo: 1,
    status: taskStatus.IN_PROGRESS,
    description: '',
    estimate: '',
    priority: taskPriority.CRITICAL,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}, {
    id: 5,
    title: 'Discover new memes',
    assignedTo: 1,
    status: taskStatus.CODE_REVIEW,
    description: '',
    estimate: '',
    priority: taskPriority.CRITICAL,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}, {
    id: 6,
    title: 'Find cure for cancer',
    assignedTo: 5,
    status: taskStatus.TODO,
    description: '',
    estimate: '',
    priority: taskPriority.MEDIUM,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: ''
}];

export const usersMock = [{
    id: 1,
    login: 'Kukuruzko',
    password: '777',
    name: 'Kuk Ruzik',
    avatar: '/src/styles/img/users/ava1.png'
}, {
    id: 2,
    login: 'Potsenyatko',
    password: '555',
    name: 'Pots Natok',
    avatar: '/src/styles/img/users/ava2.png'
}, {
    id: 3,
    login: 'Krendell',
    password: '555',
    name: 'Kren Delo',
    avatar: '/src/styles/img/users/ava3.png'
}, {
    id: 4,
    login: 'Kopipasta',
    password: '555',
    name: 'Kopi Pasta',
    avatar: '/src/styles/img/users/ava4.png'
}, {
    id: 5,
    login: 'Vaffel',
    password: '555',
    name: 'Van Felly',
    avatar: '/src/styles/img/users/ava5.png'
}];

export default {
    statusesMock,
    prioritiesMock,
    tasksMock,
    usersMock
};
