import React from 'react';

const defaultAvatarUrl = 'src/styles/img/users/ava_default.png';

const Avatar = ({ className, user }) => (
    <div className={'avatar ' + (className || '')}>
        <img src={user.avatar || defaultAvatarUrl}/>
    </div>
);

export default Avatar;
