import {useEffect, useState} from 'react';

export const useFilteredTodos = ({todos = [], visibility = true}) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos.filter(({checked}) => visibility || !checked));
  }, [todos, visibility]);

  return [filteredTodos];
};
