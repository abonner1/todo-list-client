import React, { Component } from 'react';
import { createTodoList } from '../actions/todoLists'
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
    this.props.dispatch(createTodoList({name: this.state.text}, localStorage.getItem('token')))
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
    return (this.state.showAddBox)
    ? <AddTodoListForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
    : <button onClick={this.handleClick}>+ Add Todo</button>
  }
}

export default AddTodoList;
