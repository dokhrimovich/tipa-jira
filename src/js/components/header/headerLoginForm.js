import React from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import action from "js/actions/common";
import Button from 'js/components/common/controls/button';
import TextInput from 'js/components/common/controls/textInput';
import PasswordInput from 'js/components/common/controls/passwordInput';

class HeaderLoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            message: { text: 'Please login' }
        };
    }

    render() {
        const { handleSubmit } = this.props;

        return (<form
                    autoComplete="on"
                    className="header-login-form columns"
                    onSubmit={handleSubmit((data) => this.handleSubmit(data))}>
            <span className={'form-message ' + this.state.message.type}>{this.state.message.text}</span>
            <div className="form-controls columns">
                <Field name="login" component={TextInput}/>
                <Field name="password" component={PasswordInput}/>
            </div>
            <Button type="submit" title="Login" className="btn-login" />
        </form>);
    }

    handleSubmit(data) {
        let { login, password } = data;

        return this.props.doLogin(login, password)
            .then(() => {}, (error) => {
                this.setState({
                    message: { type: 'error', text: error }
                });
            });
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
};

const mapDispatchToProps = (dispatch) => ({
    doLogin: (login, password) => action.loginByCredentials(dispatch, login, password)
});

const withStore = connect(
    null,
    mapDispatchToProps
);

const withForm = reduxForm({
    form: 'header-login11',
    validate: validate
});

export default compose(
    withForm,
    withStore,
    withRouter
)(HeaderLoginForm);
