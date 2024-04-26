import { CreateTodo } from './CreateTodo'

interface Props {
    onAddTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) =>  {

    return (
        <CreateTodo saveTodo={onAddTodo} />
    )
}