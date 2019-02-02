import React, {memo, useEffect} from 'react';
import {Flex, Box} from 'reflexbox';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import ToggleVisibilityButton from './ToggleVisibilityButton';
import CompleteAllButton from './CompleteAllButton';
import {useTodos} from './TodoList/state';
import {useInputValue} from './AddTodo/state';

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

const Actions = ({visibility, toggleVisibility, allChecked, checkAllTodos}) => (
  <>
    <ToggleVisibilityButton visibility={visibility} handleClick={toggleVisibility}/>
    <CompleteAllButton handleClick={() => checkAllTodos(!allChecked)} checked={allChecked} />
  </>
);

export default memo(() => {
  const {inputValue, changeInput, clearInput, keyInput} = useInputValue();
  const {filteredTodos, checkAllTodos, allChecked, toggleVisibility, visibility, activeTodos, addTodo, checkTodo, removeTodo} = useTodos(items);

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Flex auto column align='center' justify='center'>
      <Box w={1 / 3}>
        <Card>
          <CardHeader title={'manage your todos'} subheader={`Number of active todos: ${activeTodos}`}
                      action={<Actions checkAllTodos={checkAllTodos} allChecked={allChecked} visibility={visibility} toggleVisibility={toggleVisibility} />}
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