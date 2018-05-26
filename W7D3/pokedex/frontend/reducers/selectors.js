import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  let pokeArray = values(state.entities.pokemon);
  return pokeArray;
};

export const selectPokeItems = (state) => {
  let pokeItems = values(state.entities.items);
  return pokeItems;
};

export const selectPokeItem = (state, itemId) => {
  let pokeItem = state.entities.items[itemId];
  return pokeItem;
};
