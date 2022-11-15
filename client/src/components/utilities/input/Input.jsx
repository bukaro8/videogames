import React from 'react';
import './Input.css';
const Input = ({ placeholder, width, label, type, value }) => {
  return (
    <div>
      {label && <label className='label'>{label}</label>}
      <input
        className='input'
        type={type || 'text'}
        placeholder={placeholder}
        style={{ maxWidth: `${width}` }}
        value={value}
      />
    </div>
  );
};

export default Input;
