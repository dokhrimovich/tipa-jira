import React from 'react';
import Button from './common/button';

const Header = ({
    userName,
    isLoggedIn,
    onLoginClick,
    onLogoutClick
                }) => (
    <div className="header">
        <a href="/"><img src=""></img></a>
        <h1>Tipa JIRA</h1>
        {isLoggedIn
            ? (<span>Welcome, {userName}</span>)
            : (<span>Please login</span>)
        }
        {isLoggedIn
            ? (<Button title="Logout" className="btn-logout" onClick={() => onLogoutClick()} />)
            : (<Button title="Login" className="btn-login" onClick={() => onLoginClick()} />)
        }
    </div>
);

export default Header;
