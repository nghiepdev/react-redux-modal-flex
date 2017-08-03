import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import createStore from './store';
import reducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
