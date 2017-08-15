import React, {Component} from 'react';
import TodoLists from '../components/TodoLists';

class FilterableTodoLists extends Component {
  render() {
    return (
      <div>
        <TodoLists />
      </div>
    )
  }
}

export default FilterableTodoLists;
