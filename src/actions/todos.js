import fetch from 'isomorphic-fetch'

const getTodos = () => ({ type: 'GET_TODOS' })

const storeTodos = todos => ({ type: 'STORE_TODOS', todos })

const addTodo = todo => ({ type: 'ADD_TODO', todo })

export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id })

export const deleteTodo = id => ({ type: 'DELETE_TODO', id })

export const fetchTodos = (todo_list_id, token) => {
  return dispatch => {
    dispatch(getTodos())
    return fetch(`http://localhost:3001/api/todo_lists/${todo_list_id}/todos`, {
      method: 'GET',
      headers: { "Authorization": token }
    })
      .then(response => response.json())
      .then(json => dispatch(storeTodos(json)))
  }
}

export const createTodo = (todo, id, token) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/todo_lists/${id}/todos`, {
      method: 'POST',
      body: JSON.stringify({todo}),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
      .then(response => response.json())
      .then(json => dispatch(addTodo(json)))
  }
}
