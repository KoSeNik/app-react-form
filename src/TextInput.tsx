import React from 'react';
import './TextInput.css';
import { TextInputProps } from './types';

export const TextInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  checked,
  icon,
  description,
  error,
}:TextInputProps) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          checked={checked}
          className={`input-field ${icon ? 'input-shift' : ''} ${error ? 'input-error' : ''}`}
        />
      </div>
      {description && <p className="input-description">{description}</p>}
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};