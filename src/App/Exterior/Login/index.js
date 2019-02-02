import React from 'react';
import {Box, Flex} from 'reflexbox';
import {Card, TextField, CardHeader, Button, CardActions, CardContent} from '@material-ui/core';

export default ({history}) => {
  const login = () => {
    history.push('/');
  };

  return (
    <Flex auto column align='center' justify='center'>
      <Box w={1 / 3}>
        <form>
          <Card>
            <CardHeader title='Login' />
            <CardContent>
              <Flex column>
                <TextField name={'email'} label='Email' />
                <TextField name={'password'} type={'password'} label='Password' />
              </Flex>
            </CardContent>
            <CardActions>
              <Button onClick={login} type='submit' primary>
                {'Login'}
              </Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Flex>
  );
};