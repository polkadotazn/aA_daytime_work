import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
import { combineReducers } from 'redux';


export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
});
