import React, { useState } from 'react';
import s from './components.module.css';
import Button from './button';
import { Input } from './input';

type PropsTunerType={
    maxValue:number
    minValue:number
    addMaxValue:(value:number)=>void
    addMinValue:(value:number)=>void
    saveValue:()=>void
    value:string|number
}



function Tuner(props:PropsTunerType) {
    let disablet = false
    if(typeof props.value==="number"){
        disablet = true
    }if(props.minValue<0||props.maxValue<0){
        disablet = true
    }
        
    const saveValue = () => {
        props.saveValue()
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.displayTuner}>
                <Input title={'max value: '} value={props.maxValue} addValue={props.addMaxValue}/>
                <Input title={'start value: '} value={props.minValue} addValue={props.addMinValue}/>
            </div>
            <div className={s.btnWrapper}>
                <Button counter={saveValue} disabled={disablet} name={'Set'}/>
            </div>
        </div>
    )
}

export default Tuner