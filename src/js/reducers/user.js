import * as actionType from '../constants/actionTypes';

const user = (state = {}, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                name: action.userName
            });
        case actionType.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                name: ''
            });
        default:
            return state;
    }
};

export default user;
