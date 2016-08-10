import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

import 'framework7/dist/css/framework7.material.css';
import 'framework7/dist/css/framework7.material.colors.css';
import './../css/weather7.css';

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

