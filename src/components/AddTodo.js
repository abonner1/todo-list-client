import React, {Component} from 'react'
import { addTodo } from '../actions/todos'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onTodoSubmit(addTodo({
      description: this.state.text,
      todoListId: parseInt(this.props.id, 10)
    }))
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
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" value="+" />
      </form>
    )
  }
}

export default AddTodo;
