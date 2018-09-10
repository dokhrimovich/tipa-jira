import React from 'react';
import Logo from 'js/components/common/logo';
import HeaderUserInfo from 'js/components/header/headerUserInfo';

class Header extends React.Component {
    render() {
        return (
            <div className="header normal">
                <Logo className="header-logo" url="/" />
                <h1 className="header-title">Tipa JIRA</h1>
                <div className="header-right-container right normal">
                    <HeaderUserInfo />
                </div>
            </div>
        );
    }
}

export default Header;
