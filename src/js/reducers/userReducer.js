import actionType from 'js/constants/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return Object.assign({}, action.data, {
                isLoggedIn: true
            });
        case actionType.LOGOUT:
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default userReducer;
