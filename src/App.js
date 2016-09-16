import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import About from './components/About';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);


export default function configureStore() {
  const store = createStore(reducer, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}


const store = configureStore();

render((
  <div>
    <Provider store={store}>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Index }/>
          <Route path="about" component={ About }/>
        </Route>
      </Router>
    </Provider>
  </div>
), document.getElementById('root'));
