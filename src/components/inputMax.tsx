import React, { ChangeEvent } from "react";
import s from "./components.module.css";

type PropsInputType = {
  value: number;
  error: boolean;
  addValue: (value: number) => void;
};

export const InputMax = (props: PropsInputType) => {
  const addValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.addValue(+e.currentTarget.value);
  };

  return (
    <div className={s.inputWrapper}>
      <div>max value: </div>
      <input
        className={props.error ? s.error : ""}
        type="number"
        value={props.value}
        onChange={addValue}
      />
    </div>
  );
};
