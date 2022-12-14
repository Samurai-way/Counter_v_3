import React, {useState} from 'react';
import app from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Tablo} from "./components/Tablo/Tablo";
import counter from './components/Counter/Counter.module.css'
import tablo from './components/Tablo/Tablo.module.css';

export const App = () => {

    const [value, setValue]=useState(0)
    const [style, setStyle]=useState(true)
    const [start, setStart]=useState(0)
    const [max, setMax]=useState(0)
    const [disabled, setDisabled]=useState(false)

    const valueINC = () => {
        setValue(value+1)
        if(value+1 === max){
            setDisabled(!disabled)
        }
    }

    const valueDEC = () => {
        setValue(0)
        setDisabled(false)
    }

    const toggle = ()=>{
        localStorage.setItem('saveValue:', JSON.stringify(start))
        localStorage.setItem('maxValue:', JSON.stringify(max))
        let str = localStorage.getItem('saveValue:')
        if(str) {
            let newValue = JSON.parse(str)
            setValue(newValue)
        }
        setStyle(!style)
    }

    return (
        <div className={app.wrapper}>
            <div style={style ? {display: 'block'} : undefined} className={counter.wrapper}>
                <Counter value={value}
                         valueINC={valueINC}
                         valueDEC={valueDEC}
                         toggle={toggle}
                         disabled={disabled}
                         max={max}
                />
            </div>
            <div style={style ? {display: 'none'} : undefined} className={tablo.wrapper}>
                <Tablo
                    toggle={toggle}
                    start={start}
                    setStart={setStart}
                    max={max}
                    setMax={setMax}
                    setDisabled={setDisabled}
                />
            </div>
        </div>
    );
};
