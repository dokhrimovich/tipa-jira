import React from 'react';
import Logo from '../common/logo';
import HeaderLoginForm from './headerLoginForm';
import HeaderUserInfo from './headerUserInfo';

const Header = ({ user, onLoginClick, onLogoutClick }) => (
    <div className="header">
        <Logo className="header-logo" url="/" />
        <h1 className="header-title">Tipa JIRA</h1>
        <div className="header-right-container">
            {user.isLoggedIn
                ? (<HeaderUserInfo user={user} onLogoutClick={onLogoutClick} />)
                : (<HeaderLoginForm onLoginClick={onLoginClick}/>)
            }
        </div>
    </div>
);

export default Header;
