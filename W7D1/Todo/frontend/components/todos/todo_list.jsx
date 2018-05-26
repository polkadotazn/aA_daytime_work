import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  renderTodo(todo) {
    console.log(todo);
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
    const {todos} = this.props;
    return (
      <div class="main-page">
        <div class="list-view">
          <h1>Things To Do:</h1>
          <ul class="list">
            {this.renderTodos(todos)}
          </ul>
          <TodoForm receiveTodo={this.props.receiveTodo} />
        </div>
      </div>
    );
  }
}

export default TodoList;
