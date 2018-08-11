import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import action from 'js/actions/common';
import Header from 'js/components/header/header';

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: (login, password) => action.login(dispatch, login, password),
    onLogoutClick: () => action.logout(dispatch)
});

const HeaderContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));

export default HeaderContainer;
