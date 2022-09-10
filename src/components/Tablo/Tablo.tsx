import React, {ChangeEvent} from 'react';
import counter from "../Counter/Counter.module.css";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import tablo from './Tablo.module.css';

type TabloProps = {
    toggle:()=>void
    start:number
    max:number
    setStart:(start:number)=>void
    setMax:(max:number)=>void
    setDisabled:(disabled:boolean)=>void
}

export const Tablo = (props:TabloProps) => {

    const toggleCLICK = ()=>{
        props.toggle()
        if(props.start < 0 || props.max < 0 || props.max < props.start){
            props.setDisabled(true)
        }
    }

    const onChangeStart = (e:ChangeEvent<HTMLInputElement>)=>{
        props.setStart(Number(e.currentTarget.value))
    }

    const onChangeMax = (e:ChangeEvent<HTMLInputElement>)=>{
        props.setMax(Number(e.currentTarget.value))
    }

    return (
        <div className={tablo.mini_wrapper}>
            <div className={tablo.value}>
                <div className={tablo.start}>Start value:
                    <input
                        style={props.start < 0 ? {backgroundColor: 'red'}: undefined}
                        className={tablo.input_start}
                        type={'number'}
                        value={props.start}
                        onChange={onChangeStart}
                    />
                </div>
                <div>Max value:
                    <input
                        style={props.max < 0 ? {backgroundColor: 'red'}: undefined}
                        className={tablo.input_max}
                        type={'number'}
                        value={props.max}
                        onChange={onChangeMax}
                    />
                </div>
            </div>
            <div className={counter.button_wrapper}>
                <div className={tablo.sec}>
                    <UniversalButton name={'sec'}
                                     onClick={toggleCLICK}
                    />
                </div>
            </div>
        </div>
    );
};
