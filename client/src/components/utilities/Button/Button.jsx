import React from 'react';
import './Button.css';
//*you must pass one of the colours define on the variables
// --primary: #ec4b71;
// --info: #221a36;
// --success: #7c915a;
// --warning: #f98122;
// --danger: #f44336;

// --light: #fbfef8;

const Button = ({ color, text, action }) => {
  return (
    <button onClick={action} className={`btn ${color}`}>
      {text}
    </button>
  );
};

export default Button;
