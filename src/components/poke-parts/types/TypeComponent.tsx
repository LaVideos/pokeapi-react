import React from 'react';
import {ITypes} from "../../../interfaces/poke";

import classNames from 'classnames/bind';
import styles from './Types.module.scss'
import {Badge} from "@mui/material";


const cn = classNames.bind(styles)

interface IType{
    typeObj:ITypes
}
const TypeComponent = ({typeObj}:IType) => {
    return (
        <div className={cn("types-container")} >
        <div className={cn('types-name')}>Type name - {typeObj.type.name}</div>
    <div className={cn('types-slot')}>
        <a className={cn("link")} href={typeObj.type.url}>more type data</a>
        <Badge className={cn('badge')} badgeContent={typeObj.slot} color="secondary">
            <div className={cn("slot-text")}>Slot</div>
        </Badge>
    </div>
</div>
    );
};

export default TypeComponent;
