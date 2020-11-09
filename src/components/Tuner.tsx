import React from 'react';
import s from './components.module.css';
import Button from './button';
import { InputMax } from './inputMax';
import { InputMin } from './inputMin';

type PropsTunerType={
    maxValue:number
    minValue:number
    error: boolean
    addMaxValue:(value:number)=>void
    addMinValue:(value:number)=>void
    saveValue:()=>void
    value:string|number
}



function Tuner(props:PropsTunerType) {
    let disablet = false
    if(typeof props.value==="number"){
        disablet = true
    }if(props.minValue<0||props.maxValue<0||props.minValue>=props.maxValue){
        disablet = true
    }
        
    const saveValue = () => {
        props.saveValue()
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.displayTuner}>
                <InputMax error = {props.minValue>=props.maxValue} value={props.maxValue} addValue={props.addMaxValue}/>
                <InputMin error = {props.error} value={props.minValue} addValue={props.addMinValue}/>
            </div>
            <div className={s.btnWrapper}>
                <Button counter={saveValue} disabled={disablet} name={'Set'}/>
            </div>
        </div>
    )
}

export default Tuner