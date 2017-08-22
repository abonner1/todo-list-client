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
    this.props.dispatch(addTodo({
      description: this.state.text,
      todoListId: this.props.id
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
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={this.handleChange} value={this.state.text} />
        <input className="button" type="submit" value="+" />
      </form>
    )
  }
}

export default AddTodo;
