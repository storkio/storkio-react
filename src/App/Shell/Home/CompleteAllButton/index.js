import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {DoneAll as DoneAllIcon} from '@material-ui/icons';

export default ({checked, handleClick}) => (
  <Tooltip title={checked ? 'Mark all unchecked' : 'Mark all checked'}>
    <IconButton onClick={() => handleClick(handleClick)}>
      <DoneAllIcon color={checked ? 'default' : 'secondary'} />
    </IconButton>
  </Tooltip>
);
