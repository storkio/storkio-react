import React, {memo} from 'react';
import {List, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {Flex} from 'reflexbox';
import TodoListItem from './Todo';

const ScrollableDiv = styled(Flex)
  .attrs({column: true})`
    overflow-y: auto;
    max-height: 50vh;
`;

const TodoList = memo(({todos, onItemRemove, onItemCheck}) => (
  <div>
    {todos.length > 0 ?
      (
        <List>
          <ScrollableDiv>
            {todos.map(todo => (
              <TodoListItem
                {...todo}
                key={todo.id}
                onButtonClick={() => onItemRemove(todo.id)}
                onCheckBoxToggle={() => onItemCheck(todo.id)}
              />
            ))}
          </ScrollableDiv>
        </List>
      ) : (
        <Typography variant={'h5'}>{'There are no Todos yet!'}</Typography>
      )}
  </div>
));

export default TodoList;
