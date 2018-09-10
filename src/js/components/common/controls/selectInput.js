import React from 'react';
import Select from 'react-select';
import InputWrapper from 'js/components/common/controls/inputWrap';
import styles from 'js/components/common/controls/selectInputStyles';

class SelectInput extends React.Component {
    render() {
        const { input: { value, onBlur } } = this.props;

        return (<InputWrapper
            InputComponent={Select}
            className="select-input"
            styles={styles}
            onBlur={() => onBlur(value)}
            {...this.props} />);
    }
}

export default SelectInput;
