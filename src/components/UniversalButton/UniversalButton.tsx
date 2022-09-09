import React from 'react';
import button from './Button.module.css'

type UniversalButtonProps = {
    name: string
    onClick:()=>void
}

export const UniversalButton = (props:UniversalButtonProps) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button className={button.button} onClick={onClickHandler}>{props.name}</button>
    );
};
