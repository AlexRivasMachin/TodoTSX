import React from "react";
import { Todo } from "../types.ts";

interface Props {
  todos: Todo[];
}

//Tipamos un functional component con React.FC<Props> y le pasamos un objeto con la propiedad todos que es un array de objetos de tipo Todo
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}