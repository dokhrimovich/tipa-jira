import React from 'react';
import Header from "../components/header/header";
import { connect } from "react-redux";
import { login, logout } from '../actions/common';

const mapStateToProps = (state) => ({
    userName: state.user.name,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: (userName, password) => login(dispatch, userName, password),
    onLogoutClick: () => logout(dispatch)
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
