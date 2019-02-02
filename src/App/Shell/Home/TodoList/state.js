import {useState, useEffect} from 'react';

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);
  const [visibility, setVisibility] = useState(true);
  const [filteredTodos, setFilteredTodos] = useState(initialValue);
  const [activeTodos, setActiveTodos] = useState(0);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    setFilteredTodos(todos.filter(({checked}) => visibility || !checked));
  }, [visibility]);

  useEffect(() => {
    setFilteredTodos(todos.filter(({checked}) => visibility || !checked));
    setActiveTodos(todos.reduce((count, {checked}) => count + !checked, 0));
    setAllChecked(todos.every(({checked}) => checked));
  }, [todos]);

  return {
    activeTodos,
    checkAllTodos: checked => {
      setTodos(todos.map(todo => {
        todo.checked = checked;

        return todo;
      }
      ));
    },
    allChecked,
    visibility,
    filteredTodos,
    toggleVisibility: () => {
      setVisibility(!visibility);
    },
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
