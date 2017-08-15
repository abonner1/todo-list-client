import React, {Component} from 'react';

class VisibleTodoList extends Component {
  render() {
    return (
      <div>
        <h1>Current Todo List</h1>
        <ul>
          <li>Milk</li>
          <li>Eggs</li>
          <li>Butter</li>
        </ul>
      </div>
  )
  }
}

export default VisibleTodoList;
