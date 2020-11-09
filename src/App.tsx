import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Tuner from "./components/Tuner";
import { RootStateType } from "./redux/store";
import {
  StateType,
  addMaxValueAC,
  addMinValueAC,
  counterAC,
  saveValueAC,
} from "./redux/app-reducer";

function App() {
  const state = useSelector<RootStateType, StateType>((state) => state.app);
  const dispatch = useDispatch();

  const addMaxValue = (value: number) => {
    dispatch(addMaxValueAC(value));
  };
  const addMinValue = (value: number) => {
    dispatch(addMinValueAC(value));
  };

  const saveValue = () => {
    dispatch(saveValueAC());
  };
  const counter = () => {
    dispatch(counterAC());
  };

  return (
    <div className="wrapper">
      <Tuner
        maxValue={state.maxValue}
        value={state.value}
        minValue={state.startValue}
        saveValue={saveValue}
        addMaxValue={addMaxValue}
        addMinValue={addMinValue}
        error={state.error}
      />
      <Counter
        maxValue={state.maxValue}
        error={state.error}
        counter={counter}
        reset={saveValue}
        startValue={state.value}
      />
    </div>
  );
}

export default App;
