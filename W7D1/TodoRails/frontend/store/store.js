import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import {thunk} from '../middleware/thunk';


let configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    // return createStore(rootReducer);
    applyMiddleware(thunk)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
