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
      showAddBox: true
    })
  }

  render () {
    const AddTodoListBox =  this.state.showAddBox ? <input type="text" /> : <button onClick={this.handleClick}>+ Add Todo</button>
    return (
      <div>
        {AddTodoListBox}
      </div>
    )
  }
}

export default AddTodoList;
