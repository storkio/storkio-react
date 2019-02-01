import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';

export default () => (
  <AppBar color={'default'}>
    <Toolbar>
      <IconButton color={'inherit'}>
        <MenuIcon />
      </IconButton>
      <Typography variant={'h6'}>
        {'Storkio'}
      </Typography>
    </Toolbar>
  </AppBar>
);