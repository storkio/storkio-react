import React, {memo, useState, useEffect} from 'react';
import {Flex, Box} from 'reflexbox';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import ToggleVisibilityButton from './ToggleVisibilityButton';
import CompleteAllButton from './CompleteAllButton';
import {useTodos} from './hooks/useTodos';
import {useFilteredTodos} from './hooks/useFilteredTodos';
import {useInputValue} from './AddTodo/state';
import {useAxiosFetch} from './hooks/useAxiosFetch';


export default memo(() => {
  const {inputValue, changeInput, clearInput, keyInput} = useInputValue();
  const {todos, setTodos, checkAllTodos, activeTodos, addTodo, checkTodo, removeTodo} = useTodos();
  // const {data, doGet} = useAxiosFetch('/api/todos');
  const [visibility, setVisibility] = useState(true);
  const [allChecked, setAllChecked] = useState(false);
  const [filteredTodos] = useFilteredTodos({todos, visibility});

  // doGet();

  useEffect(() => {
    setAllChecked(todos.every(({checked}) => checked));
  }, [todos]);

  const toggleAllChecked = () => {
    checkAllTodos(!allChecked);
    setAllChecked(!allChecked);
  };

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Flex auto column align='center' justify='center'>
      <Box w={1 / 3}>
        <Card>
          <CardHeader
            title={'manage your todos'} subheader={`Number of active todos: ${activeTodos}`}
            action={
              <>
                <ToggleVisibilityButton visibility={visibility} handleClick={toggleVisibility}/>
                <CompleteAllButton handleClick={toggleAllChecked} checked={allChecked}/>
              </>
            }
          />
          <CardContent>
            <AddTodo
              inputValue={inputValue}
              onInputChange={changeInput}
              onButtonClick={clearInputAndAddTodo}
              onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
            />
            <TodoList todos={filteredTodos} onItemCheck={id => checkTodo(id)} onItemRemove={id => removeTodo(id)}/>
          </CardContent>
        </Card>
      </Box>
    </Flex>
  );
});