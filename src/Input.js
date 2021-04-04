import React from "react";

const Input = (props) => {
  return (
    <div style={{ marginBottom: '40px'}}>
      <div className="title">{props.title}</div>
      <div>
        <input className="myinput" type="text" placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Input;
