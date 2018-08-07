import React from 'react';
import Header from "../components/header/header";
import { connect } from "react-redux";
import action from '../actions/common';

const mapStateToProps = (state) => ({
    login: state.user.login,
    name: state.user.name,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: (login, password) => action.login(dispatch, login, password),
    onLogoutClick: () => action.logout(dispatch)
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
