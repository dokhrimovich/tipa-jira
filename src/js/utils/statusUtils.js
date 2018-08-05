import * as taskStatus from '../constants/taskStatuses';

export const getStatusTitle = (statusCode) => {
    switch (statusCode) {
        case taskStatus.TODO: return 'To do';
        case taskStatus.IN_PROGRESS: return 'In progress';
        case taskStatus.TESTING: return 'Testing';
        case taskStatus.CLOSED: return 'Closed';
    }
};
