import React, {memo} from 'react';
import {TextField} from '@material-ui/core';

export default memo(({inputValue, onInputChange, onInputKeyPress}) => (
  <TextField
    placeholder='Write your next chore...'
    value={inputValue}
    onChange={onInputChange}
    onKeyPress={onInputKeyPress}
    fullWidth
  />
));