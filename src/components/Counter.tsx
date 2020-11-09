import React from "react";
import s from "./components.module.css";
import Display from "./display";
import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../redux/store";
import { counterAC, saveValueAC, StateType } from "../redux/app-reducer";

function Counter() {
  const state = useSelector<RootStateType, StateType>((state) => state.app);
  const dispatch = useDispatch();

  let disabled = false;
  if (typeof state.value === "string") {
    disabled = true;
  }
  const saveValue = () => {
    dispatch(saveValueAC());
  };
  const counter = () => {
    dispatch(counterAC());
  };

  return (
    <div className={s.wrapper}>
      <div
        className={`${typeof state.value == "number" ? `${s.number}` : ""} ${
          state.error || state.value === state.maxValue
            ? `${s.red} ${s.displayCounter}`
            : s.displayCounter
        }`}
      >
        <Display value={state.value} />
      </div>
      <div className={s.btnWrapper}>
        <Button
          counter={counter}
          disabled={disabled || state.value === state.maxValue}
          name={"Inc"}
        />
        <Button counter={saveValue} disabled={disabled} name={"Reset"} />
      </div>
    </div>
  );
}

export default Counter;
