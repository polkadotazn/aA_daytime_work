import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON,
          RECEIVE_SOLO_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState = {};
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      // nextState = merge({}, state, action.pokemon);
      // return nextState;
      return merge(nextState, action.pokemon);
    case RECEIVE_SOLO_POKEMON:
      // const newPoke = {[action.pokemon.id]: action.pokemon};
      // return merge({}, state, newPoke);
      nextState[action.pokemon.id] = action.pokemon;
      return nextState;
    default:
      return state;
  }
};


export default pokemonReducer;
