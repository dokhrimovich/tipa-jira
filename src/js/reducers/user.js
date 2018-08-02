const user = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                name: 'Kukuruzko'
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                name: ''
            });
        default:
            return state;
    }
};

export default user;
