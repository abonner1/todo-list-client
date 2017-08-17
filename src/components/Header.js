import React, {Component} from 'react';

class Header extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value)
    }
  }

  render() {
    return (
      <div>
        Todo List App Banner

        <input type="text" onKeyPress={this.handleKeyPress} placeholder="What's your username?" />
      </div>
    )
  }
}

export default Header;
