import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => dispatch => (
  APIUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(newUser => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
