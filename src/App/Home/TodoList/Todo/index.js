import React, {memo} from 'react';
import {
  ListItem,
  Checkbox,
  IconButton,
  Tooltip,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import styled from 'styled-components';

const NotPaddedListItem = styled(ListItem)`
  padding-left: 0 !important;
`;

export default memo(({text, checked, onCheckBoxToggle, onButtonClick}) => (
  <NotPaddedListItem>
    <Checkbox
      onClick={onCheckBoxToggle}
      checked={checked}
    />
    <ListItemText primary={text}/>
    <ListItemSecondaryAction>
      <Tooltip title={'Delete'}>
        <IconButton aria-label='Delete Todo' onClick={onButtonClick}>
          <DeleteOutlined/>
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </NotPaddedListItem>
));