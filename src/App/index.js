import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Flex} from 'reflexbox';

export default () => (
  <MuiThemeProvider>
    <Flex auto>
      {'Hello World'}
    </Flex>
  </MuiThemeProvider>
);
