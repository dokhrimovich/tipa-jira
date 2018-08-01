import React from 'react';
import Header from "../components/header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userName: state.user.name,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: () => dispatch({ type: 'LOGIN' }),
    onLogoutClick: () => dispatch({ type: 'LOGOUT' })
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
