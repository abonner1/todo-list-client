import React, { Component } from 'react';
import { addTodoList } from '../actions/todoLists'

class AddTodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddBox: false,
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onTodoListAdd(addTodoList(this.state.text))
    this.setState({
      showAddBox: false
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
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
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" value="Add TodoList" />
            <button type="button" onClick={this.handleClick}>Cancel</button>
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
