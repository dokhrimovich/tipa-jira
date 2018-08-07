export const getItem = (key) => {
    let value;
    let rawValue = localStorage.getItem(key);

    try {
        value = rawValue && JSON.parse(rawValue);
    } catch (e) {
        value = rawValue;
    }

    return value;
};

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
    localStorage.removeItem(key);
};

export default { getItem, setItem, removeItem };
