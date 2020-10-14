import React from 'react';
import s from './components.module.css';
import Display from './display';
import Button from './button';

type PropsCounterType={
    maxValue:number
    startValue:number|string
    counter:()=>void
    reset:()=>void
}


function Counter(props:PropsCounterType) {
    let disabled = false
    if(typeof props.startValue==='string'){
        disabled=true
    }
    // let dis = false
    // if()
    const Counter = () => {
        props.counter()
    }
    const resetValue = () => {
        props.reset()
    }
    return (
        <div className={s.wrapper}>
            <div className={disabled||props.startValue===props.maxValue?`${s.red} ${s.displayCounter}`:s.displayCounter}>
                <Display value={props.startValue} />
            </div>
            <div className={s.btnWrapper}>
                <Button counter={Counter} disabled={disabled||props.startValue===props.maxValue} name={'Inc'}/>
                <Button counter={resetValue} disabled={disabled} name={'Reset'}/>
            </div>
        </div>
    )
}

export default Counter