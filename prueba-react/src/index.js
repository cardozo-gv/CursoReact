import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

import * as serviceWorker from './serviceWorker';

//Routers
import AppRoutes from './routes';

render(
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();