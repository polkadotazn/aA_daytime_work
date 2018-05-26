import * as APIUtil from '../util/api_util';

export const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};
