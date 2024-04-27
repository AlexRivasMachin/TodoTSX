import './App.css'
import { useState } from 'react'
import {Todos} from './components/Todos'
import { TODO_FILTER } from './CONSTS'
import { FilterValue } from './types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Learn GraphQL', completed: false },
]

const App = (): JSX.Element =>{
  const [todos, setTodos] = useState(mockTodos)

  const [filterSelected, setFilterSelected] = useState<FilterValue>(() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
    if (filter === null) return TODO_FILTER.ALL
    // check filter is valid, if not return ALL
    return Object
      .values(TODO_FILTER)
      .includes(filter)
      ? filter
      : TODO_FILTER.ALL
  })

  const onFilterChange = (filter: FilterValue): void => {
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

  const handleNewTodo = (title: string):void => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
}

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTER.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTER.COMPLETED) {
      return todo.completed
    }
    return todo
  })

  return (
    <>
    <h1>Todo<span style={{color : '#2d79c7'}}>TSX</span></h1>
    <div className="links">
      <a href="https://github.com/AlexRivasMachin" target='_blank'>Github</a>
      <a href="https://www.linkedin.com/in/alex-rivas-machin/" target='_blank'>Linkedin</a>
      <a href="https://alexdev.eus/" target='_blank'>Portfolio</a>
    </div>
    <p>by Alex Rivas Machin</p>
    <div className="todoapp">      <Header onAddTodo={handleNewTodo}/>
    
      <Todos 
        onToggle = { handleToggle }
        onRemove = { handleRemove }
        todos={filteredTodos}
      />
      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
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
