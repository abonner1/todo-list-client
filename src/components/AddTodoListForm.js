import React from 'react'

const AddTodoListForm = ({handleChange, handleSubmit, handleClick}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <input className="button" type="submit" value="Add TodoList" />
      <button type="button" onClick={handleClick}>Cancel</button>
    </form>
  )
}

export default AddTodoListForm
