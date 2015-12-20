import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../reducers/reducers'

export default function configureStore (initialState) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);
  createStoreWithMiddleware = compose(middleware)
  const store = createStoreWithMiddleware(createStore)(
    Reducers, initialState
  )
  return store;
}
