export const addTodoList = (todoList) => ({ type: 'ADD_TODOLIST', todoList })

export const deleteTodoList = id => ({ type: 'DELETE_TODOLIST', id })
