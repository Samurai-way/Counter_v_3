import React, {useState} from 'react';
import app from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Tablo} from "./components/Tablo/Tablo";
import counter from './components/Counter/Counter.module.css'
import tablo from './components/Tablo/Tablo.module.css';

export const App = () => {

    const [value, setValue]=useState(0)
    const [style, setStyle]=useState(true)
    const [text, setText]=useState(0)

    console.log(text)
    const valueINC = () => {
        setValue(value+1)
    }

    const valueDEC = () => {
        setValue(0)
    }

    const toggle = ()=>{
        setStyle(!style)
    }

    return (
        <div className={app.wrapper}>
            <div style={style ? {display: 'block'} : undefined} className={counter.wrapper}>
                <Counter value={value}
                         valueINC={valueINC}
                         valueDEC={valueDEC}
                         toggle={toggle}
                />
            </div>
            <div style={style ? {display: 'none'} : undefined} className={tablo.wrapper}>
                <Tablo
                    toggle={toggle}
                    value={text}
                    setText={setText}
                />
            </div>
        </div>
    );
};
