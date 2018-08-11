import React from 'react';
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

export default Header;
