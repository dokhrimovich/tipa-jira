import React from 'react';

const Button = ({
    className,
    title,
    onClick
                }) => (
    <div className={'btn-wrap ' + (className || '')}>
        <button
            className="btn"
            type="button"
            onClick={onClick}
        >
        {title}
        </button>
    </div>
);

export default Button;
