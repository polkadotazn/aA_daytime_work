import { merge } from 'lodash';
import { RECEIVE_SOLO_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SOLO_POKEMON:
      return merge(nextState, action.items);
    default:
      return state;
  }
};


export default itemsReducer;
