import React from 'react';
import {IAbility} from "../../../interfaces";

import classNames from 'classnames/bind';
import styles from './Ability.module.scss'
import {Badge} from "@mui/material";


const cn = classNames.bind(styles)

interface AbilityProps {
    ability: IAbility
}

const AbilityComponent = ({ability}: AbilityProps) => {
    return (
        <div className={cn("ability-container")}>
            <div className={cn("ability-name")}>Ability : {ability.ability.name}</div>
            <div className={cn("ability-hidden")}>Is hidden : {`${ability.is_hidden}`}</div>
            <div className={cn("ability-slot")}>
                <a className={cn("link")} href={ability.ability.url}>more ability data</a>
                <Badge className={cn('badge')} badgeContent={ability.slot} color="secondary">
                    <div className={cn("slot-text")}>Slot</div>
                </Badge>
            </div>
        </div>
    );
};

export default AbilityComponent;
