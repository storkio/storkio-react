import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Help as HelpIcon, Menu as MenuIcon} from '@material-ui/icons';
import styled from 'styled-components';
import history from '../../../history';

const ClickableTitle = styled(Typography)`
  cursor: pointer;
`;

export default () => {
  const handleAbout = () => {
    history.push('/about');
  };

  const handleHome = () => {
    history.push('/');
  };

  return (
    <AppBar color={'default'}>
      <Toolbar variant={'dense'}>
        <IconButton color={'inherit'}>
          <MenuIcon />
        </IconButton>
        <ClickableTitle variant={'h6'} onClick={handleHome}>
          {'Storkio'}
        </ClickableTitle>
        <IconButton onClick={handleAbout}>
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};