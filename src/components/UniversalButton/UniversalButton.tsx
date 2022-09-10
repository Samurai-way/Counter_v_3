import React from 'react';
import button from './Button.module.css'

type UniversalButtonProps = {
    name: string
    onClick:()=>void
    disabled?:boolean
}

export const UniversalButton = (props:UniversalButtonProps) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button
            disabled={props.disabled}
            className={button.button}
            onClick={onClickHandler}>
            {props.name}
        </button>
    );
};
