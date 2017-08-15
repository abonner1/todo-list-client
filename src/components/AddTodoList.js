import React, { Component } from 'react';

class AddTodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddBox: false
    }
  }

  handleClick = () => {
    this.setState({
      showAddBox: !this.state.showAddBox
    })
  }

  render () {
    const AddTodoListBox = () => {
      if (this.state.showAddBox) {
        return (
          <form>
            <input type="text" />
            <input type="submit" value="Add TodoList" />
            <button onClick={this.handleClick}>Cancel</button>
          </form>
        )
      } else {
        return (
          <button onClick={this.handleClick}>+ Add Todo</button>
        )
      }
    }
    return (
      <div>
        {AddTodoListBox()}
      </div>
    )
  }
}

export default AddTodoList;
