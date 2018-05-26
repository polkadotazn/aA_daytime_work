export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todosArray = [];
  keys.map(key => {
    // console.log(key);
    // console.log(state);
    // console.log(state[key]);
    todosArray.push(state.todos[key]);
  });

  return todosArray;
};
