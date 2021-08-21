import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store'


// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js/'

ReactDOM.render(

  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

