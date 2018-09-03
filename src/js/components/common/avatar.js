import React from 'react';

const defaultAvatarUrl = 'src/styles/img/users/ava_default.png';

const Avatar = ({ className, user, onClick }) => (
    <div className={'avatar ' + (className || '')} onClick={onClick}>
        <img src={user.avatar || defaultAvatarUrl}/>
    </div>
);

export default Avatar;
