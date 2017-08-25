import fetch from 'isomorphic-fetch'

const getTodoLists = () => ({ type: 'GET_TODOLISTS' })

const storeTodoLists = (todoLists) => ({ type: 'STORE_TODOLISTS', todoLists })

const addTodoList = (todoList) => ({ type: 'ADD_TODOLIST', todoList })

export const deleteTodoList = id => ({ type: 'DELETE_TODOLIST', id })

export const fetchTodoLists = (token) => {
  return dispatch => {
    dispatch(getTodoLists())
    return fetch('http://localhost:3001/api/todo_lists', {
      method: 'GET',
      headers: { "Authorization": token }
    })
      .then(response => response.json())
      .then(json => dispatch(storeTodoLists(json)))
  }
}

export const createTodoList = (todo_list, token) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/todo_lists', {
      method: 'POST',
      body: JSON.stringify({todo_list}),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
       }
    })
      .then(response => response.json())
      .then(json => dispatch(addTodoList(json)))
  }
}
