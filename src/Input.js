import React from "react";
import './input.css'

const Input = ({ name, setName, title, placeholder, change }) => {
  
  return (
    <div className="input-margin">
      <div className="title">{title}</div>
      <div>
        <input onChange={change} value={name} className="myinput" type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
