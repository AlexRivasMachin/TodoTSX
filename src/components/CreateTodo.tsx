import React from 'react'

interface Props {
    saveTodo: (title: string) => void
}

export const CreateTodo: React.FC<Props> = ({saveTodo}) => {
    const [inputValue, setInputValue] = React.useState('')
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveTodo(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='new-todo' 
                placeholder='Enter the title of the task' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
            />
        </form>
    )
}