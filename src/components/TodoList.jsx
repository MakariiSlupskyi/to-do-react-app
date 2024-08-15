import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  return (
    <ul className='main'>
      {props.todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} todo={todo} index={todoIndex} key={todoIndex} />
        )
      })}
    </ul>
  )
}
