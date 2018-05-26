import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodo(todo) {
    return (
      <TodoListItem key={todo.id} todo={todo}/>
    );
  }

  renderTodos(todos) {
    return (
      todos.map((todo) => (
        this.renderTodo(todo)
      ))
    );
  }

  render() {
    const {todos, receiveTodo, createTodo} = this.props;
    return (
      <div className="main-page">
        <div className="list-view">
          <h1>Things To Do:</h1>
          <ul className="list">
            {this.renderTodos(todos)}
          </ul>
          <TodoForm
            receiveTodo={receiveTodo}
            createTodo={createTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
