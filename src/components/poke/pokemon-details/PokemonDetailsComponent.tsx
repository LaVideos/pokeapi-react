import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {pokemonsAction} from "../../../redux";
import {AbilityComponent, TypeComponent} from "../../index";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import classNames from 'classnames/bind';
import styles from './Pokemondetails.module.scss'
import {IconButton} from "@mui/material";


const cn = classNames.bind(styles)

const PokemonDetailsComponent = () => {
    const {name} = useParams();
    const {poke} = useAppSelector(state => state.pokemons);
    const dispatch = useAppDispatch();
    const [openType,setOpenType] = useState<boolean>(false);
    const [openAbility,setOpenAbility] = useState<boolean>(false);
    useEffect(()=>{
       name&&dispatch(pokemonsAction.getPokemonByName(name))
    },[name,dispatch])
    return (
       <>
           {poke &&  <div className={cn("pokemon-detail-container")}>
               <div className={cn("pokemon-img-container")}><img className={cn("pokemon-img")} src={poke.sprites?.['front_default']} alt=""/></div>
               <div><span className={cn("pokemon-title")}>{poke.name.toUpperCase()}</span></div>
               <div className={cn("abilities-container")}>
                   <div className={cn("center")}><span>Abilities</span>
                       {
                           <IconButton onClick={()=>setOpenAbility(!openAbility)} aria-label="delete">
                               {
                                   !openAbility?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>
                               }
                           </IconButton>
                       }
                   </div>
                   {
                       openAbility&&<div>
                           {poke.abilities.map((value, index) => <AbilityComponent ability={value} key={index}/>)}
                       </div>
                   }
               </div>
               <div className={cn("types-container")}>
                   <div className={cn("center")}>
                       <span>Types</span>
                       {
                           <IconButton onClick={()=>setOpenType(!openType)} aria-label="delete">
                               {
                                   !openType?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>
                               }
                           </IconButton>
                       }
                   </div>
                   {openType&&
                       <div>
                           {poke.types.map((value, index) => <TypeComponent typeObj={value} key={index}/>)}
                       </div>
                   }
               </div>
           </div>}
       </>
    );
};

export default PokemonDetailsComponent;
