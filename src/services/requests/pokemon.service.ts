import {endpoints} from "../../constants";
import {axiosService} from "../axios/axios.service";

export const PokemonService = {
    getPokemons:async (url:string)=>await axiosService.get(url),
    getPokemonByName:async (name:string)=>axiosService.get(`${endpoints.pokemons}/${name}`)
}
