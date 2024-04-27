import { type Todo as TodoType } from "../types.ts";
import "./Todo.css";

interface Props  extends TodoType{
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}
    


export const Todo:React.FC<Props> = ({ id, title, completed, onRemove, onToggle }) => {
    return (
        <div>
            <input 
                className='toggle' 
                type="checkbox" 
                checked={completed} 
                onChange={() => {
                    onToggle(id) // ya esta tipado arriba
                }}
                style={{ textDecoration: completed ? "line-through" : "none" }}
                />
            <label>{title}</label>
            <button
                className='destroy-button'
                style={{textDecoration:'none'}}
                onClick={() => {
                    onRemove(id) // ya esta tipado arriba
                }}
            >
                Remove
                </button>
        </div>
    )   
}