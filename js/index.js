import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import CreditApp from './containers/CreditApp'
import { createStore, compose, combineReducers } from 'redux'
import configureStore from './redux/configureStore'
import routes from './routes'

const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__);
syncReduxAndRouter(history, store, (state) => state.router);


render(
  <CreditApp store={store} history={history} routes={routes} />,
  document.getElementById("form-container")
);
