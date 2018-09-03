import React from 'react';

class InputWrapper extends React.Component {
    defaultClasses = ['control'];

    render() {
        const { input, meta, label, InputComponent, children } = this.props;
        const { submitting } = meta;

        return (
            <div className={this.getClassName()}>
                {label && (<label>{label}</label>)}
                <InputComponent {...input} disabled={submitting}/>
                {children}
            </div>
        );
    }

    getClassName() {
        const { meta, className } = this.props;
        const { pristine, invalid, valid, asyncValidating } = meta;
        const classes = [...this.defaultClasses];

        className && classes.push(className);
        pristine && valid && classes.push('valid');
        pristine && invalid && classes.push('invalid');
        asyncValidating && classes.push('validating');

        return classes.join(' ');
    }
}

export default InputWrapper;
