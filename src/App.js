import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import About from './components/About';

import * as reducers from './reducers';

const reducer = combineReducers(reducers)

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

render((
  <div>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index }/>
        <Route path="about" component={ About }/>
      </Route>
    </Router>
  </div>
), document.getElementById('root'))
