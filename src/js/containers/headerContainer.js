import React from 'react';
import Header from "../components/header/header";
import { connect } from "react-redux";
import * as actionType from '../constants/actionTypes';

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
            dispatch({ type: actionType.LOGIN, userName: userName });
        });

        return authPromise;
    },
    onLogoutClick: () => dispatch({ type: actionType.LOGOUT })
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
