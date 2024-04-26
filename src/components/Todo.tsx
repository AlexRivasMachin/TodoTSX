import { type Todo as TodoType } from "../types.ts";

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
                }}/>
            <label>{title}</label>
            <button 
                className='destroy' 
                onClick={() => {
                    onRemove(id) // ya esta tipado arriba
                }}
            />
        </div>
    )   
}