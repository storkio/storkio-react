import {useState, useEffect} from 'react';
import {items} from '../items.json';

export const useTodos = (initialValue = items) => {
  const [todos, setTodos] = useState(initialValue);
  const [activeTodos, setActiveTodos] = useState(0);

  useEffect(() => {
    setActiveTodos(todos.reduce((count, {checked}) => count + !checked, 0));
  }, [todos]);

  const addTodo = text => {
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
        ]);
    }
  };

  const checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }

        return todo;
      })
    );
  };

  const checkAllTodos = checked => {
    setTodos(todos.map(todo => {
      todo.checked = checked;

      return todo;
    }
    ));
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    setTodos,
    activeTodos,
    checkAllTodos,
    addTodo,
    checkTodo,
    removeTodo
  };
};
