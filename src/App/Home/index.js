import React, {memo} from 'react';
import {Flex, Box} from 'reflexbox';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import TodoList from './TodoList';
import AddTodo from './TodoList/AddTodo';
import {useInputValue, useTodos} from './TodoList/state';

const items = [{
  id: 1,
  text: 'Todo 1',
  checked: false
}, {
  id: 2,
  text: 'Todo 2',
  checked: true
}, {
  id: 3,
  text: 'Todo 3',
  checked: true
}];

export default memo(() => {
  const {inputValue, changeInput, clearInput, keyInput} = useInputValue();
  const {todos, addTodo, checkTodo, removeTodo} = useTodos(items);


  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Flex auto column align='center' justify='center'>
      <Box w={1 / 3}>
        <Card>
          <CardHeader title={'manage your todos'} />
          <CardContent>
            <AddTodo
              inputValue={inputValue}
              onInputChange={changeInput}
              onButtonClick={clearInputAndAddTodo}
              onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
            />
            <TodoList todos={todos} onItemCheck={id => checkTodo(id)} onItemRemove={id => removeTodo(id)} />
          </CardContent>
        </Card>
      </Box>
    </Flex>
  );
});