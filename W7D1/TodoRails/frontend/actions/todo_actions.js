import { fetchAllTodos, createTodo } from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos = []) => {
  return {
    type: "RECEIVE_TODOS",
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: "RECEIVE_TODO",
    todo
  };
};

export const fetchTodos = () => dispatch => (
  fetchAllTodos().then(serverTodos => dispatch(receiveTodos(serverTodos)))
);

export const createTodoThunkAction = (todo) => dispatch => {
  console.log(`todo:${todo}`);
  return createTodo(todo).then(serverTodo => dispatch(receiveTodo(serverTodo)));
};
