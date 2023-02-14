import React from 'react';
import {IGetPokeObj} from "../../../interfaces";
import {NavLink} from "react-router-dom";


import classNames from 'classnames/bind';
import styles from './Pokemon.module.scss'


const cn = classNames.bind(styles)


interface PokemonProps{
    pokemon:IGetPokeObj
}

const PokemonComponent = ({pokemon}:PokemonProps) => {

    return (
        <div>
            <NavLink className={(navData) => (navData.isActive ? cn('active') : cn("pokemon-container"))}
                     to={`${pokemon.name}`}>
            <div className={cn("pokemon-name-container")}><span
                className={cn("pokemon-text")}>{pokemon.name.toUpperCase()}</span></div>
        </NavLink>
        </div>
    );
};

export default PokemonComponent;
