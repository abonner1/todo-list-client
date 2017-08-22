import React from 'react'
import { Route } from 'react-router-dom'
import ConnectedTodoLists from './ConnectedTodoLists'
import VisibleTodoList from './VisibleTodoList'

const AppRoutes = ({handleClick}) => {
  return (
    <div>
      <Route path="/todo_lists" component={ConnectedTodoLists} />
      <Route path="/todo_lists/:todo_list_id" component={VisibleTodoList} />
      <button type="button" onClick={handleClick}>Log out</button>
    </div>
  )
}

export default AppRoutes
