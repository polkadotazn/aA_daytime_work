import React from 'react';

class TodoListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {todo} = this.props;

    return (
      <li className="list-item-container" key={todo.id}>
        {todo.title}
        <br/>
        <p className="list-item-description">{todo.body}</p>
      </li>
    );
  }
}

export default TodoListItem;
