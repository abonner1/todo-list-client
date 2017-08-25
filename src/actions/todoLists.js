const getTodoLists = () => ({ type: 'GET_TODOLISTS' })

const storeTodoLists = (todoLists) => ({ type: 'STORE_TODOLISTS', todoLists })

export const addTodoList = (todoList) => ({ type: 'ADD_TODOLIST', todoList })

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
