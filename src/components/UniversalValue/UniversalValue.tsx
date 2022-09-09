import React from 'react';
import value from './Value.module.css';

type UniversalValueProps = {
    value: number
}

export const UniversalValue = (props: UniversalValueProps) => {
    return (
        <div className={value.wrapper}>
            <h1>
                {props.value}
            </h1>
        </div>
    );
};

