import React from 'react';
import {receiveTodo} from '../../actions/todo_actions';

class TodoForm extends React.Component {
  constructor() {
    console.log("REFRESH");
    super();
    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  linkState(key) {

    return (event => {
      this.setState({[key]: event.currentTarget.value});
    });
  }

  submit(e) {
    const {createTodo} = this.props;

    e.preventDefault();
    createTodo(this.state);
    this.setState({
      id: Date.now(),
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div>
        <form className="todo-form-container">
          <label>Title
            <br/>
            <input
              className="form-input"
              onChange={this.linkState('title')}
              value={this.state.title}>
            </input>
          </label>
          <br/>
          <label>Description
            <br/>
            <textarea
              className="form-input"
              onChange={this.linkState('body')}
              value={this.state.body}>
            </textarea>
          </label>
          <br/>
          <button onClick={this.submit.bind(this)}>Create To-do</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
