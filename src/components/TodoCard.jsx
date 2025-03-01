import React from 'react'

export default function TodoCard({ todo, index, handleDeleteTodo, handleEditTodo }) {
  return (
    <li className='todoItem'>
      <p>{todo}</p>
      <div className='actionsContainer'>
        <button onClick={(e) => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={(e) => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
