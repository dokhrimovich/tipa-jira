import * as actionType from "../constants/actionTypes";

const statuses = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_STATUSES:
            return [ ...action.data];
        default:
            return state;
    }
};

export default statuses;
