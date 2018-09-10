import React from 'react';
import InputWrapper from 'js/components/common/controls/inputWrap';

class PasswordInput extends React.Component {
    constructor() {
        super();

        this.state = { show: false };
    }

    render() {
        const { input } = this.props;
        const { show } = this.state;

        input.type = show ? 'text' : 'password';

        return (
            <InputWrapper
                    className="password-input"
                    InputComponent='input'
                    {...this.props}>
                {input.value && (<span className="hide-show-btn" onClick={() => this.toggleHideShow()}>{show ? 'Hide' : 'Show'}</span>)}
            </InputWrapper>
        );
    }

    toggleHideShow() {
        this.setState(prevSate => ({
            show: !prevSate.show,
        }));
    }
}

export default PasswordInput;
