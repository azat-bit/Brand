import React from 'react';
import "./button.css"

function Button({ buttonText, type }) {
    return (
        <div>
            <button className='login' type={type}>{buttonText}</button>
        </div>
    );
}

export default Button;
