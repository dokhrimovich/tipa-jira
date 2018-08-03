import React from 'react';
import Header from "../components/header/header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userName: state.user.name,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: (userName, password) => {
        let authPromise = new Promise((resolve, reject) => {
                window.setTimeout(() => {
                    if (password === '777') {
                        resolve();
                    } else {
                        reject('auth error');
                    }
                }, 200);
        });

        authPromise.then(() => {
            dispatch({ type: 'LOGIN', userName: userName });
        });

        return authPromise;
    },
    onLogoutClick: () => dispatch({ type: 'LOGOUT' })
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
