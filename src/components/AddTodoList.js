import React, { Component } from 'react';
import { addTodoList } from '../actions/todoLists'
import AddTodoListForm from './AddTodoListForm'

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
    this.props.dispatch(addTodoList(this.state.text))
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
    if (this.state.showAddBox) {
      return <AddTodoListForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>+ Add Todo</button>
        </div>
      )
    }
  }
}

export default AddTodoList;
