import * as actionType from 'js/constants/actionTypes';

const statusesReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_STATUSES:
            return [ ...action.data];
        default:
            return state;
    }
};

export default statusesReducer;
