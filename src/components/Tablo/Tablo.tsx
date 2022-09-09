import React, {ChangeEvent} from 'react';
import counter from "../Counter/Counter.module.css";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import tablo from './Tablo.module.css';

type TabloProps = {
    toggle:()=>void
    value:number
    setText:(text:number)=>void
}

export const Tablo = (props:TabloProps) => {

    const toggleCLICK = ()=>{
        props.toggle()
    }

    const onChangeStart = (e:ChangeEvent<HTMLInputElement>)=>{
        props.setText(Number(e.currentTarget.value))
    }

    return (
        <div className={tablo.mini_wrapper}>
            <div className={tablo.value}>
                <div className={tablo.start}>Start value:
                    <input
                        className={tablo.input_start}
                        type={'number'}
                        value={props.value}
                        onChange={onChangeStart}
                    />
                </div>
                <div>Max value:
                    <input
                        className={tablo.input_max}
                        type={'number'}
                        // value={props.value}
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
