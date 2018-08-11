import React from 'react';
import Button from 'js/components/common/button';
import Avatar from 'js/components/common/avatar';

const HeaderUserInfo = ({ user, onLogoutClick }) => (
    <div className="header-user-container">
        <span>Welcome, {user.name}</span>
        <Avatar user={user}/>
        <Button title="Logout" className="btn-logout" onClick={() => onLogoutClick()} />
    </div>
);

export default HeaderUserInfo;
