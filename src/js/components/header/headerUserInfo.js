import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import action from "js/actions/common";
import Avatar from 'js/components/common/avatar';
import HeaderLoginForm from 'js/components/header/headerLoginForm';

class HeaderUserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: false };
    }

    render() {
        let { user } = this.props;
        let { isLoggedIn } = user;

        return (<div className="header-user-info columns center">
            {isLoggedIn && (<Avatar user={user} onClick={() => this.toggleDropDown()}/>)}
            {isLoggedIn
                ? (<a href="#" onClick={(event) => this.logoutLinkClick(event)}>Logout</a>)
                : (<a href="#" onClick={(event) => this.loginLinkClick(event)}>Login</a>)
            }
            {this.state.show && !isLoggedIn && (
                <div className="header-user-info-dropdown columns">
                    <div className="center">
                        <HeaderLoginForm />
                    </div>
                    <div className="dropdown-footer rows center">
                        <div className="btn-hide-dropdown" onClick={() => this.toggleDropDown()} />
                    </div>
                </div>
            )}
        </div>);
    }

    logoutLinkClick(event) {
        event.preventDefault();

        this.props.doLogout();
    }

    loginLinkClick(event) {
        event.preventDefault();

        this.toggleDropDown();
    }

    toggleDropDown() {
        this.setState(prevSate => ({
            show: !prevSate.show,
        }));
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (login, password) => action.loginByCredentials(dispatch, login, password),
    doLogout: () => action.logout(dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderUserInfo));
