import React, { useState } from 'react';
import './input.scss';

export const Input = ({ type, text, placeholder, fullWidth = false, value, onChange, error, isSubmitted }) => {
    return (
        <div className={`input ${fullWidth ? 'input--full-width' : ''}`}>
            <div className="input__block">
                <p className="input__text">{text}</p>
                <div className={`input__wrapper ${error ? 'input__wrapper input__wrapper-error' : 'input__wrapper'}`}>
                    <input
                        className="input__input"
                        type={type}
                        placeholder={value ? '' : placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
};
