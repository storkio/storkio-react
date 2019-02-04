import React, {useState} from 'react';
import {Box, Flex} from 'reflexbox';
import {Card, TextField, CardHeader, Button, CardActions, CardContent} from '@material-ui/core';
import {useAxiosFetch} from '../../Shell/Home/hooks/useAxiosFetch';

export default ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginReq = {
    method: 'post',
    url: '/auth/local',
    data: {
      email: 'rick@gmail.com',
      password: '123456789'
    }
  };

  const {data, fetchData} = useAxiosFetch(loginReq);
  const login = () => {
    fetchData().then(() => {
      console.log(data);
    });
  };

  return (
    <Flex auto column align='center' justify='center'>
      <Box w={1 / 3}>
        <form>
          <Card>
            <CardHeader title='Login'/>
            <CardContent>
              <Flex column>
                <TextField name={'email'} label='Email'/>
                <TextField name={'password'} type={'password'} label='Password'/>
              </Flex>
            </CardContent>
            <CardActions>
              <Button onClick={login} primary>
                {'Login'}
              </Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Flex>
  );
};