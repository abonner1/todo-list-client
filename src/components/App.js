import React, { Component } from 'react'
import DayPicker from './CalendarWidget'
import FilterableTodoLists from '../containers/FilterableTodoLists'
import Header from './Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Route } from 'react-router-dom'

const routes = [
  {
    path: "/todo_lists",
    exact: true
  },
  {
    path: "/todo_lists/:todo_list_id",
    exact: true
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={DayPicker}
              />
            ))}
          </div>
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={FilterableTodoLists}
              />
            ))}
          </div>
          <div>
            <Route
              path={routes[1].path}
              exact={routes[1].exact}
              component={VisibleTodoList}
            />
          </div>
      </div>
    );
  }
}

export default App
