import React, {useEffect} from 'react';
import {HeaderComponent} from "../../components";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss'


const cn = classNames.bind(styles)

const MainLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        location.pathname === '/'&&navigate('/pokemons')
    },[])
    return (
        <div>
            <HeaderComponent/>
            <div className={cn("main")}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
