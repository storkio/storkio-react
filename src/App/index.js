import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {Flex} from 'reflexbox';
import Toolbar from './Toolbar';
import Home from './Home';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Flex auto>
        <Toolbar />
        <Home />
      </Flex>
    </CssBaseline>
  </MuiThemeProvider>
);
