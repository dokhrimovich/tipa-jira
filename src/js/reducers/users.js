import * as actionType from "../constants/actionTypes";

const users = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_USERS:
            return [ ...action.data];
        default:
            return state;
    }
};

export default users;
