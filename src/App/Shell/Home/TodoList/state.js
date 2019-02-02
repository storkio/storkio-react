import {useState} from 'react';

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: text => {
      if (text !== '') {
        const newTodo = {
          checked: false,
          text,
          id: todos.length + 1
        };

        setTodos(
          [
            ...todos,
            newTodo
          ]
        );
      }
    },
    checkTodo: id => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    removeTodo: id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };
};
