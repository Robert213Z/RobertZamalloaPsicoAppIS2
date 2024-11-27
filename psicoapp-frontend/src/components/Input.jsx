import React from 'react';
import './Input.css';

function Input({ label, type = 'text', name, value, onChange, error }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'input-error' : ''}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Input;
