import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Tuner from './components/Tuner';

function App() {
  type StateType={
    maxValue:number,
    startValue:number,
    value:number|string,
    error:boolean,
  }
  let [state, setState] = useState<StateType>({
    maxValue:5,
    value:"enter values and press 'set'",
    startValue:0,
    error:false,
  })
  //@ts-ignore
  window.state=state
  const addMaxValue=(value:number)=>{
    if(value<=state.startValue||state.startValue<0){
      setState({...state,value:"Incorrect value!",maxValue: value, error: true})
    }else
    setState({...state,value:"enter values and press 'set'",maxValue: value, error: false})
  }
  const addMinValue=(value:number)=>{
    if(value<0||value>=state.maxValue){
      setState({...state,value:"Incorrect value!",startValue: value, error: true})
    }else
    setState({...state,value:"enter values and press 'set'",startValue: value, error: false})
  }
 
  const saveValue=()=>{
    setState({...state,value:state.startValue})
  }
  const counter = () => {
    if(typeof state.value === 'number')
    state.value !== state.maxValue && setState({...state,value:++state.value})
  }
  

  return (
    <div className='wrapper'>
      <Tuner maxValue={state.maxValue}
             value={state.value}
             minValue={state.startValue}
             saveValue={saveValue}
             addMaxValue={addMaxValue}
             addMinValue={addMinValue}
             error = {state.error}/>
      <Counter maxValue={state.maxValue} error = {state.error} counter={counter} reset={saveValue} startValue={state.value}/>
    </div>
  );
}

export default App;
