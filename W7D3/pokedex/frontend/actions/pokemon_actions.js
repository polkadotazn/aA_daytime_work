import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SOLO_POKEMON = 'RECEIVE_SOLO_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch, getState) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

// thunk action creator
export const requestSoloPokemon = (id) => (dispatch, getState) => (
  APIUtil.fetchSoloPokemon(id)
  .then(poke => dispatch(receiveSoloPokemon(poke)))
);

export const receiveSoloPokemon = payload => ({
  type: RECEIVE_SOLO_POKEMON,
  pokemon: payload.pokemon,
  items: payload.items
});


export const createPokemon = () => (dispatch, getState) => (
  APIUtil.createPokemon()
    .then(pokemon => dispatch(requestSoloPokemon(pokemon)))
);
