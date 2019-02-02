import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';

export default ({handleClick, visibility}) => (
  <Tooltip title={visibility ? 'Show Active' : 'Show All'}>
    <IconButton onClick={handleClick}>
      {visibility ? <VisibilityOff/> : <Visibility/>}
    </IconButton>
  </Tooltip>
);