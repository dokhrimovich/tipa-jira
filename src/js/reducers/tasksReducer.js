import * as actionType from '../constants/actionTypes';

const getPreviewTask = (data) => data;

const updateTask = (task, data) => task;

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_TASKS:
            return action.data.map(getPreviewTask);
        case actionType.CREATE_TASK:
            return [ ...state, getPreviewTask(action.data) ];
        case actionType.UPDATE_TASK:
            return state.map((task) => updateTask(task, action.data));
        case actionType.DELETE_TASK:
            return [
                ...state.splice(0, action.data.id),
                ...state.splice(action.data.id + 1, state.lenght)
            ];
        default:
            return state;
    }
};

export default tasksReducer;
