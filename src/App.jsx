import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits',
    'Pick up the kids from school'
  ])
  const [newTodo, setNewTodo] = useState('')
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }

  function handleAddTodo(newTodo) {
    if (!todos.includes(newTodo) && newTodo != '') {
      const newTodoList = [newTodo, ...todos]
      setTodos(newTodoList)
      persistData(newTodoList)
      setNewTodo('')
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    
    setTodos(newTodoList )
    persistData(newTodoList)
  }

  function handleEditTodo(index) {
    setNewTodo(todos[index])
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    setTodos(JSON.parse(localTodos).todos)
  }, [])

  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  )
}

export default App
