import React from 'react';
import './Button.css';
const Button = ({ color, text }) => {
  return <button className={`btn ${color}`}>{text}</button>;
};

export default Button;
