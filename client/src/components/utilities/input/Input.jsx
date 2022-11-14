import React from 'react';
import './Input.css';
const Input = ({ placeholder, width, label }) => {
  return (
    <div>
      {label && <label className='label'>{label}</label>}
      <input
        className='input'
        type='text'
        placeholder={placeholder}
        style={{ maxWidth: `${width}` }}
      />
    </div>
  );
};

export default Input;
