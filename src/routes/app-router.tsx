import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts";
import {PokemonDetailsComponent, PokemonsComponent} from "../components";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={'pokemons'} element={<PokemonsComponent/>}>
                    <Route path={':name'} element={<PokemonDetailsComponent/>}></Route>
                </Route>
            </Route>
        </Routes>
    )
}
