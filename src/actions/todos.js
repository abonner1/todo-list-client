const AddTodo = todo => {
  type: 'ADD_TODO',
  todo
}

const EditTodo = todo => {
  type: 'EDIT_TODO',
  todo
}

const ToggleTodo = id => {
  type: 'TOGGLE_TODO',
  id
}

const DeleteTodo = id => {
  type: 'DELETE_TODO',
  id
}
