import { useState } from "react"

export default function TodoInput({ newTodo, setNewTodo, handleAddTodo }) {  
  return (
    <header>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo..." />
      <button onClick={() => {handleAddTodo(newTodo)}}>Add</button>
    </header>
  )
}