import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import './styles.css';
import App from './App';

const rootComponentRender = () => render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

rootComponentRender();

module.hot.accept();