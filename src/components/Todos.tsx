import React from "react";
import { type Todo as TodoType } from "../types.ts";
import  { Todo } from './Todo'

interface Props {
  todos: TodoType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}


//Tipamos un functional component con React.FC<Props> y le pasamos un objeto con la propiedad todos que es un array de objetos de tipo Todo
export const Todos: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li 
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
        <Todo 
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
        </li>
      ))}
    </ul>
  );
}