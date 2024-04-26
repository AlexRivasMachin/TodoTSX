import { Filters } from "./Filters"
import { FilterValue } from "../types"

interface Props {
    activeCount: number;
    onClearCompleted: () => void;
    completedCount: number;
    filterSelected: FilterValue;
    handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected, 
    handleFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> items left
            </span>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={() => handleFilterChange}
            />
        </footer>
    )
}