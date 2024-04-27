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

  // const [currentPage, setCurrentPage] = React.useState(1);
  // const todosPerPage = 6;

  // const indexOfLastTodo = currentPage * todosPerPage;
  // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // const totalPageNumbers = Math.ceil(todos.length / todosPerPage);

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
    <ul className="todos">
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
    {/* <ul className="pagination">
      {Array.from({ length: totalPageNumbers }).map((_, index) => (
        <li key={index}>
          <button onClick={() => paginate(index + 1)}>{index + 1}</button>
        </li>
      ))}
    </ul> */}
    </>
  );
}