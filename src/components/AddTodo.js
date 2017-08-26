import React, {Component} from 'react'
import { createTodo } from '../actions/todos'
import { getToken } from '../helpers/getToken'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(createTodo({ description: this.state.text }, this.props.id, getToken()))
    this.setState({
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={this.handleChange} value={this.state.text} />
        <input className="button" type="submit" value="+" />
      </form>
    )
  }
}

export default AddTodo;
