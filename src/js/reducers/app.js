import { combineReducers } from 'redux';
import user from './user';
import * as actionType from "../constants/actionTypes";
import * as taskStatuses from "../constants/taskStatuses";

const app = (state = { statuses: [] }, action) => {
    switch (action.type) {
        case actionType.INIT:
            return Object.assign({}, state, {
                statuses: [taskStatuses.TODO, taskStatuses.IN_PROGRESS, taskStatuses.TESTING, taskStatuses.CLOSED]
            });
        default:
            return state;
    }
};

export default combineReducers({ app, user });
