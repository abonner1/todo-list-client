import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" value="+" />
      </form>
    )
  }
}

export default AddTodo;
