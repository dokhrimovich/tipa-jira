import React from 'react';

class InputWrapper extends React.Component {
    defaultClasses = ['control', 'normal'];
    render() {
        const { label, InputComponent, children, input, meta, ...other } = this.props;
        const inputComponentProps = { ...input, ...other };

        return (
            <div className={this.getClassName()}>
                {label && (<label>{label}</label>)}
                <div className="input-wrap normal">
                    <InputComponent {...inputComponentProps} />
                </div>
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
