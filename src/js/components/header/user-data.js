import React from 'react';
import Button from '../common/button';

const LoginInvitationForm = ({ userName, onLogoutClick }) => (
    <div className="header-user-container">
        <span>Welcome, {userName}</span>
        <Button title="Logout" className="btn-logout" onClick={() => onLogoutClick()} />
    </div>
);

export default LoginInvitationForm;
