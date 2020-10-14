import React, { ChangeEvent } from "react";
import s from './components.module.css';


type PropsInputType={
    title:string
    value:number
    addValue:(value:number)=>void
}



export const Input = (props:PropsInputType) => {
    // debugger
  const addValue=(e:ChangeEvent<HTMLInputElement>)=>{
    props.addValue(+e.currentTarget.value)
  }


  return (
    <div className={s.inputWrapper}>
      <div>{props.title}</div>
      <input type="number" value={props.value} onChange={addValue}/>
    </div>
  );
};
