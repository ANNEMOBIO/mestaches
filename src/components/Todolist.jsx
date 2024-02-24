import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ajout des icônes à la bibliothèque
library.add(faCheckCircle, faEdit, faTrash);

const Todolist = ({ todos, setTodos, setEditTodo }) => {

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const handleComplete = (clickedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === clickedTodo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className={`listes ${todo.completed ? "complete" : ""}`} key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) =>
              setTodos((prevTodos) =>
                prevTodos.map((prevTodo) =>
                  prevTodo.id === todo.id
                    ? { ...prevTodo, title: event.target.value }
                    : prevTodo
                )
              )
            }
          />
          <div>
            <button className="button-complete task-button"
              onClick={() => handleComplete(todo)}>
              <FontAwesomeIcon icon="check-circle" />
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <FontAwesomeIcon icon="edit" />
            </button>
            <button className="button-delete task-button"
              onClick={() => handleDelete(todo)}>
              <FontAwesomeIcon icon="trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
