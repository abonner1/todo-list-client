export const addTodoList = (todoList) => {
  return {
    type: 'ADD_TODOLIST',
    todoList
  }
}

export const deleteTodoList = id => {
  return {
    type: 'DELETE_TODOLIST',
    id
  }
}
