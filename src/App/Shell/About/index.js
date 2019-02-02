import React from 'react';
import {Flex} from 'reflexbox';
import {Card, CardHeader, Typography, CardContent} from '@material-ui/core';

export default () => (
  <Flex auto column align='center' justify='center'>
    <Card>
      <CardHeader title='Contributors' />
      <CardContent>
        <Flex column>
          <Typography variant={'button'}>{'Sharon Grossman'}</Typography>
        </Flex>
      </CardContent>
    </Card>
  </Flex>
);