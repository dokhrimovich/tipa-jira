import React from 'react';
import Button from '../common/button';

const LoginInvitationForm = ({ name, onLogoutClick }) => (
    <div className="header-user-container">
        <span>Welcome, {name}</span>
        <Button title="Logout" className="btn-logout" onClick={() => onLogoutClick()} />
    </div>
);

export default LoginInvitationForm;
