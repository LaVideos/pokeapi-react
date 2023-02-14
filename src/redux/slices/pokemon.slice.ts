import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGetPokeArr, IPoke} from "../../interfaces";
import {PokemonService} from "../../services";

export interface initialStateCharacters {
    request_data:IGetPokeArr|undefined,
    poke:IPoke|undefined
}

const initialState: initialStateCharacters = {
    poke: undefined,
    request_data:undefined
};

const getPokemonByName = createAsyncThunk(
    'pokemonSlice/getPokemonByName',
    async (name: string, {rejectWithValue}) => {
        try {
            const {data} = await PokemonService.getPokemonByName(name);
            return data
        } catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getPokemons = createAsyncThunk(
    'pokemonSlice/getPokemons',
    async (url: string, {rejectWithValue}) => {
        try {
            const {data} = await PokemonService.getPokemons(url);
            return data
        } catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }
);


const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemonByName.fulfilled, (state, action) => {
                state.poke = action.payload;
            })
            .addCase(getPokemons.fulfilled,(state,action)=>{
                state.request_data = action.payload
            })
    }

});


const {reducer: pokemonReducer, actions: {}} = pokemonSlice;


const pokemonsAction = {
    getPokemonByName,
    getPokemons
}

export {
    pokemonReducer,
    pokemonsAction
}
