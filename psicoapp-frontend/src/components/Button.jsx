import React from 'react';
import './Button.css';

function Button({ type = 'button', onClick, children, variant = 'primary', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
