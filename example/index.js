import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import reducers from './store/reducers';

import Modal from '../src';

import App from './App';
import Fork from './Fork';

import './styles.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <React.Fragment>
      <App />
      <Modal />
      <Fork />
    </React.Fragment>
  </Provider>,
  document.getElementById('app')
);
