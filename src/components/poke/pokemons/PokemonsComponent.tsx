import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {pokemonsAction} from "../../../redux";
import {endpoints} from "../../../constants";
import {PokemonComponent} from "../../index";
import {Outlet} from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './Pokemons.module.scss'
import Button from '@mui/material-next/Button';


const cn = classNames.bind(styles)


const PokemonsComponent = () => {

    const {request_data} = useAppSelector(state => state.pokemons);
    const dispatch = useAppDispatch();
    const [page,setPage] = useState<string>(`/${endpoints.pokemons}/?${endpoints.limit}=12`);

    useEffect(() => {
            dispatch(pokemonsAction.getPokemons(page))
    }, [page])


    return (
      <>  {
          request_data &&
          <div className={cn("container")}>
              <div className={cn("pokemons-first-part-container")}>
                  <div className={cn("pokemons-container")}>
                      {request_data?.results.map((value, index) => <PokemonComponent pokemon={value}
                                                                                     key={value.name}/>)}
                  </div>
                  <div className={cn("btn-container")}>
                      <span onClick={() =>request_data?.previous&&setPage(request_data?.previous)} ><Button className={cn('btn')}
                                 disabled={!request_data?.previous} variant="elevated">prev</Button></span>
                      <span onClick={() =>request_data?.next&& setPage(request_data?.next)}><Button  className={cn('btn')}
                                 disabled={!request_data?.next} variant="elevated">next</Button></span>
                  </div>
              </div>
              <div className={cn("outlet")}>
                  <Outlet/>
              </div>
          </div>
      }</>
    )
};

export default PokemonsComponent;
