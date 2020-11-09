import React, { ChangeEvent } from "react";
import s from "./components.module.css";

type PropsInputType = {
  value: number;
  error: boolean;
  addValue: (value: number) => void;
};

export const InputMin = (props: PropsInputType) => {
  const addValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.addValue(+e.currentTarget.value);
  };

  return (
    <div className={s.inputWrapper}>
      <div>start value: </div>
      <input
        className={props.value < 0 || props.error ? s.error : ""}
        type="number"
        value={props.value}
        onChange={addValue}
      />
    </div>
  );
};
