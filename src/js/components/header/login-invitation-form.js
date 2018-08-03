import React from 'react';
import Button from '../common/button';

class LoginInvitationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: '',
            message: { text: 'Please login' }
        };
    }

    render() {
        return (<form className="header-login-invite-form" onSubmit={(event) => this.handleSubmit(event)}>
            <span className={'form-message ' + this.state.message.type}>{this.state.message.text}</span>

            <input type="text" placeholder="user name" value={this.state.userName} onChange={(event) => this.userNameChangeHandler(event)}/>
            <input type="text" placeholder="password" value={this.state.password} onChange={(event) => this.passwordChangeHandler(event)}/>

            <Button type="submit" title="Login" className="btn-login" />
        </form>);
    }

    userNameChangeHandler(event) {
        this.setState({ userName: event.target.value });
    }

    passwordChangeHandler(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { onLoginClick } = this.props;

        onLoginClick(this.state.userName, this.state.password)
            .then(() => {}, (error) => {
                this.setState({
                    message: { type: 'error', text: error }
                });
            });
    }
}

export default LoginInvitationForm;
