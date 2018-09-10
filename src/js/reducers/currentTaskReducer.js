import actionType from 'js/constants/actionTypes';

const currentTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.SET_CURRENT_TASK:
            return Object.assign({}, action.data);
        default:
            return state;
    }
};

export default currentTaskReducer;
