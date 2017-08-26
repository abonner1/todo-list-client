import fetch from 'isomorphic-fetch'

const storeTodoLists = (todoLists) => ({ type: 'STORE_TODOLISTS', todoLists })

const addTodoList = (todoList) => ({ type: 'ADD_TODOLIST', todoList })

const deleteTodoList = id => ({ type: 'DELETE_TODOLIST', id })

export const fetchTodoLists = (token) => {
  return dispatch => {
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

export const destroyTodoList = (id, token) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/todo_lists/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id}),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
      .then(response => response.status === 204 ? dispatch(deleteTodoList(id)) : console.log(response.json().message))
  }
}
