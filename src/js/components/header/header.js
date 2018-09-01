import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import action from 'js/actions/common';
import Logo from 'js/components/common/logo';
import HeaderUserInfo from 'js/components/header/headerUserInfo';
import HeaderLoginForm from 'js/components/header/headerLoginForm';

const Header = ({ user, onLogin, onLogoutClick }) => (
    <div className="header">
        <Logo className="header-logo" url="/" />
        <h1 className="header-title">Tipa JIRA</h1>
        <div className="header-right-container">
            {user.isLoggedIn
                ? (<HeaderUserInfo user={user} onLogoutClick={onLogoutClick} />)
                : (<HeaderLoginForm onLogin={onLogin}/>)
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (login, password) => action.loginByCredentials(dispatch, login, password),
    onLogoutClick: () => action.logout(dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));
