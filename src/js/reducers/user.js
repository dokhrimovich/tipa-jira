import * as actionType from '../constants/actionTypes';

const user = (state = {}, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return Object.assign({}, action.data, {
                isLoggedIn: true
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
