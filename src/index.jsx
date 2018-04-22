import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import Main from './components/routes';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

import './assets/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);
