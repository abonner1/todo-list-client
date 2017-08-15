import React, {Component} from 'react';

class TodoListsNav extends Component {
  render() {
    return (
      <div>
        <h2>Your Todo Lists:</h2>
        <ul>
          <li>Shopping</li>
          <li>School</li>
          <li>Other</li>
        </ul>
        <a href="#">+ Add Todo List</a>
      </div>
    )
  }
}

export default TodoListsNav;
