import React from 'react';
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniversalValue} from "../UniversalValue/UniversalValue";
import counter from './Counter.module.css';

type CounterPropsType = {
    value:number
    valueINC:()=>void
    valueDEC:()=>void
    toggle:()=>void
    disabled:boolean
    max: number
}

export const Counter = (props: CounterPropsType) => {

    const style = props.value === props.max ? {color : 'red'} : {color : 'white'}

    const increment = () => {
        props.valueINC()
    }

    const decrement = () => {
        props.valueDEC()
    }

    const toggleCLICK = ()=>{
        props.toggle()
    }

    return (
        <div className={counter.mini_wrapper}>
            <div style={style}
                 className={counter.value}>
                <UniversalValue value={props.value}/>
            </div>
            <div className={counter.button_wrapper}>
            <div className={counter.inc}>
                <UniversalButton name={'inc'}
                                 onClick={increment}
                                 disabled={props.disabled}
                />
            </div>
            <div className={counter.dec}>
                <UniversalButton name={'dec'}
                                 onClick={decrement}
                />
            </div>
            <div className={counter.sec}>
                <UniversalButton name={'sec'}
                                 onClick={toggleCLICK}
                />
            </div>
            </div>
        </div>
    );
};
