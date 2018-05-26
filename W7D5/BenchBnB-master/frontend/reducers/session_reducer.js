import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state=nullUser, actions) => {
  switch(actions.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = actions.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
