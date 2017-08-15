import React, { Component } from 'react';
import DayPicker from './CalendarWidget';
import FilterableTodoLists from '../containers/FilterableTodoLists';
import Header from './Header';
import VisibleTodoList from './VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DayPicker />
        <FilterableTodoLists />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
