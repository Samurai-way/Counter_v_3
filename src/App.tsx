import React, {useState} from 'react';
import app from './App.module.css';

export const App = () => {

    const [value, setValue] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [start, setStart]=useState(0)

    const onclickInc = () => {
        setValue(value + 1)
        if (value === 5) return setDisabled(!disabled)
    }
    const onclickDec = () => {
        setValue(0)
    }

    const onclickSave = () => {
        localStorage.setItem('Save:',JSON.stringify(start))
        let str = localStorage.getItem('SaveValue')
        if(str){
            let newValue = JSON.parse(str)
            setValue(newValue)
        }
    }


    return (
        <div className={app.wrapper}>
            {value}
            <button disabled={disabled} onClick={onclickInc}>inc</button>
            <button onClick={onclickDec}>dec</button>
            <button onClick={onclickSave}>save</button>
        </div>
    );
};
