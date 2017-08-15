const AddTodo = todo => {
  type: 'ADD_TODO',
  todo
}

const EditTodo = todo => {
  type: 'EDIT_TODO',
  todo
}

const ToggleTodo = todo => {
  type: 'TOGGLE_TODO',
  todo
}

const DeleteTodo = todo => {
  type: 'DELETE_TODO',
  todo
}
