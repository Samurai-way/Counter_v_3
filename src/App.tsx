import React, {useState} from 'react';
import app from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Tablo} from "./components/Tablo/Tablo";
import counter from './components/Counter/Counter.module.css'

export const App = () => {

    const [value, setValue]=useState(0)

    const valueINC = () => {
        setValue(value+1)
    }

    const valueDEC = () => {
        setValue(0)
    }

    return (
        <div className={app.wrapper}>
            <div className={counter.wrapper}>
                <Counter value={value}
                         valueINC={valueINC}
                         valueDEC={valueDEC}
                />
            </div>
            <div>
                <Tablo/>
            </div>
        </div>
    );
};
