import React from 'react';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import {
  receiveTodo,
  receiveTodos,
  createTodoThunkAction,
  fetchTodos
} from '../../actions/todo_actions';

// Components
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodoThunkAction(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
