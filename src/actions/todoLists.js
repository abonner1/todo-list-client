export const getTodoLists = () => ({ type: 'GET_TODOLISTS' })

export const storeTodoLists = (todoLists) => ({ type: 'STORE_TODOLISTS', todoLists })

export const addTodoList = (todoList) => ({ type: 'ADD_TODOLIST', todoList })

export const deleteTodoList = id => ({ type: 'DELETE_TODOLIST', id })
