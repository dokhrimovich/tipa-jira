import actionType from 'js/constants/actionTypes';

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_USERS:
            return [ ...action.data];
        default:
            return state;
    }
};

export default usersReducer;
