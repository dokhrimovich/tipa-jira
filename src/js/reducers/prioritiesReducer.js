import actionType from 'js/constants/actionTypes';

const prioritiesReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_PRIORITIES:
            return [ ...action.data];
        default:
            return state;
    }
};

export default prioritiesReducer;
