import React from 'react';

const Button = ({ className, title, type, onClick }) => (
    <div className={'btn-wrap normal ' + (className || '')}>
        <button
            className="btn"
            type={type || 'button'}
            onClick={onClick}
        >
        {title}
        </button>
    </div>
);

export default Button;
