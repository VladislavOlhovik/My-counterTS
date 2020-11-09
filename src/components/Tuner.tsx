import React from "react";
import s from "./components.module.css";
import Button from "./button";
import { InputMax } from "./inputMax";
import { InputMin } from "./inputMin";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../redux/store";
import {
  addMaxValueAC,
  addMinValueAC,
  saveValueAC,
  StateType,
} from "../redux/app-reducer";

function Tuner() {
  const state = useSelector<RootStateType, StateType>((state) => state.app);
  const dispatch = useDispatch();

  let disablet = false;
  if (typeof state.value === "number") {
    disablet = true;
  }
  if (
    state.startValue < 0 ||
    state.maxValue < 0 ||
    state.startValue >= state.maxValue
  ) {
    disablet = true;
  }
  const addMaxValue = (value: number) => {
    dispatch(addMaxValueAC(value));
  };
  const addMinValue = (value: number) => {
    dispatch(addMinValueAC(value));
  };
  const saveValue = () => {
    dispatch(saveValueAC());
  };

  return (
    <div className={s.wrapper}>
      <div className={s.displayTuner}>
        <InputMax
          error={state.startValue >= state.maxValue}
          value={state.maxValue}
          addValue={addMaxValue}
        />
        <InputMin
          error={state.error}
          value={state.startValue}
          addValue={addMinValue}
        />
      </div>
      <div className={s.btnWrapper}>
        <Button counter={saveValue} disabled={disablet} name={"Set"} />
      </div>
    </div>
  );
}

export default Tuner;
