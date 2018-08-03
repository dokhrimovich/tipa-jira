import React from 'react';
import Logo from './logo';
import LoginInvitationForm from './login-invitation-form';
import UserData from './user-data';

const Header = ({
    userName,
    isLoggedIn,
    onLoginClick,
    onLogoutClick
                }) => (
    <div className="header">
        <Logo className="header-logo" url="/" />
        <h1 className="header-title">Tipa JIRA</h1>
        <div className="header-right-container">
            {isLoggedIn
                ? (<UserData userName={userName} onLogoutClick={onLogoutClick} />)
                : (<LoginInvitationForm onLoginClick={onLoginClick}/>)
            }
        </div>
    </div>
);

export default Header;
