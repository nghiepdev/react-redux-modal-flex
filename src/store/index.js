import { createStore, applyMiddleware, compose } from 'redux';

const __DEV__ = process.env.NODE_ENV !== 'production';

const configureStore = reducers => {
  const middlewares = [];

  if (__DEV__) {
    // middlewares.push();
  }

  let composeEnhancers = compose;

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default configureStore;
