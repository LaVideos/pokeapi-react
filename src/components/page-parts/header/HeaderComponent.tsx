import React from 'react';
import logo from "../../../assets/png/pokeapi_.png"

import classNames from 'classnames/bind';
import styles from './Header.module.scss'


const cn = classNames.bind(styles)

const HeaderComponent = () => {
    return (
        <div className={cn("header-container")}>
            <img className={cn("pokeapi-png")} src={logo} alt=""/>
        </div>
    );
};

export default HeaderComponent;
