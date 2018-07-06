'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

import App from './components/App';

window.onload = () => {
  ReactDOM.render(<App/>, document.getElementById('main'));
};
