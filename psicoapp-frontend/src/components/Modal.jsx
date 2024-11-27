import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose} className="close-btn">X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
