import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {Flex} from 'reflexbox';
import AppBar from './components/Toolbar';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

export default ({children}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Flex auto>
        <AppBar />
        {children}
      </Flex>
    </CssBaseline>
  </MuiThemeProvider>
);
