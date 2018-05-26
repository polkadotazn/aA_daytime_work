import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// Test Imports
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import {allTodos} from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();

  // Test variables
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
});
