import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {pokemonReducer} from "../slices/pokemon.slice";





const comb = combineReducers({
    pokemons:pokemonReducer
});

const setupStore = () => configureStore({
    reducer:comb,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

type RootState = ReturnType<typeof comb>
type setup = ReturnType<typeof setupStore>
type AppDispatch = setup['dispatch']

export type {
    RootState,
    setup,
    AppDispatch
}

export {
    setupStore
}
