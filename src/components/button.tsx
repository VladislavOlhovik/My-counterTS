import React from "react";
import s from "./components.module.css";

type buttonType = {
  counter: () => void;
  disabled: boolean;
  name: string;
};

function Button(props: buttonType) {
  return (
    <div>
      <button
        className={props.disabled ? `${s.btn} ${s.disabled}` : s.btn}
        disabled={props.disabled}
        onClick={props.counter}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
