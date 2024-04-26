import './App.css'
import { useState } from 'react'
import {Todos} from './components/Todos'
import { TODO_FILTER } from './CONSTS'
import { FilterValue } from './types'
import { Footer } from './components/Footer'

const mockTodos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Learn GraphQL', completed: false },
]

const App = (): JSX.Element =>{
  const [todos, setTodos] = useState(mockTodos)

  const [filterSelected, setFilterSelected] = useState(TODO_FILTER.ALL);

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemove = (id: number) => {
    //Borrar es basicamente filtrar los todos que no tengan el id que queremos borrar
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggle = (id: number) => {
    //Toggle es cambiar el estado de completed de true a false y viceversa
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <>
    <div className="todoapp">
      <h1>Todo</h1>
      <Todos 
        onToggle = { handleToggle }
        onRemove = { handleRemove }
        todos={todos}
      />
      <Footer 
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={() => {
          const newTodos = todos.filter((todo) => !todo.completed)
          setTodos(newTodos)}
        }
      />
    </div>
    </>
  )
}

export default App
