export default {
    container: (base) => ({
        ...base,
        flex: 1
    }),
    control: (base) => ({
        ...base,
        'border': 'none',
        'box-shadow': 'none',
        'min-height': '30px'
    }),
    dropdownIndicator: (base) => ({
        ...base,
        'padding': '2px'
    }),
    valueContainer: (base) => ({
        ...base,
        'padding': '0 8px'
    }),
};
