import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CreditApp from './containers/CreditApp'
import Reducers from './reducers/reducers'


// Action -> Dispatcher -> Store -> View
let store = createStore(Reducers);

render(
  <Provider store={store}>
    <CreditApp />
  </Provider>,
  document.getElementById("form-container")
);
