import React from 'react';
import Button from '../common/button';

class LoginInvitationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            message: { text: 'Please login' }
        };
    }

    render() {
        return (<form className="header-login-invite-form" onSubmit={(event) => this.handleSubmit(event)}>
            <span className={'form-message ' + this.state.message.type}>{this.state.message.text}</span>

            <input type="text" name="login" placeholder="Login" value={this.state.login} onChange={(event) => this.userNameChangeHandler(event)}/>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.passwordChangeHandler(event)}/>

            <Button type="submit" title="Login" className="btn-login" />
        </form>);
    }

    userNameChangeHandler(event) {
        this.setState({ login: event.target.value });
    }

    passwordChangeHandler(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { onLoginClick } = this.props;

        onLoginClick(this.state.login, this.state.password)
            .then(() => {}, (error) => {
                this.setState({
                    message: { type: 'error', text: error }
                });
            });
    }
}

export default LoginInvitationForm;
