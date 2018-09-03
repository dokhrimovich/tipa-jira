import React from 'react';
import InputWrapper from 'js/components/common/controls/inputWrap';

class TextInput extends React.Component {
    render() {
        return <InputWrapper InputComponent='input' {...this.props} />;
    }
}

export default TextInput;
