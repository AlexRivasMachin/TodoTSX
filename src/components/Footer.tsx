import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  onFilterChange
}) => {
  const singleActiveCount = activeCount === 1
  const activeTodoWord = singleActiveCount ? 'tarea' : 'tareas'

  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} pendiente{!singleActiveCount && 's'}
      </span>

      <Filters filterSelected={filterSelected} 
      onFilterChange={onFilterChange} />

        {completedCount > 0 && (
            <button className="clear-completed" onClick={onClearCompleted}>
            Limpiar completados
            </button>
        )}
    </footer>
  )
}