import React from 'react';
import {AppBar, Toolbar, Typography, Tooltip, IconButton} from '@material-ui/core';
import {ExitToApp as LogoutIcon, Help as HelpIcon, Menu as MenuIcon} from '@material-ui/icons';
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

  const handleLogout = () => {

  };

  return (
    <AppBar color={'default'}>
      <Toolbar variant={'dense'}>
        <IconButton color={'inherit'}>
          <MenuIcon/>
        </IconButton>
        <ClickableTitle variant={'h6'} onClick={handleHome}>
          {'Storkio'}
        </ClickableTitle>
        <Tooltip title={'About'}>
          <IconButton onClick={handleAbout}>
            <HelpIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title={'Logout'}>
          <IconButton onClick={handleLogout}>
            <LogoutIcon/>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};