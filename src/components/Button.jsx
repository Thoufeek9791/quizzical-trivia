import React, { useCallback, useState } from "react";

const Button = (props) => {
  console.count('button component')
  return (
    <button value={props.option} className="option" onClick={props.click}>
      {props.option}
    </button>
  );
};

export default Button;
