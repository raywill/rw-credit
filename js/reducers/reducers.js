import { routeReducer } from 'redux-simple-router';
import { combineReducers } from 'redux'
import {
  REQUEST_ITEM_LIST, RECEIVE_ITEM_LIST,
  REQUEST_ITEM, RECEIVE_ITEM
} from '../actions/actions'

function myAction(state=[], action) {
  console.log('Reducer Action', state, action);
  return state;
}


function itemList(state=[], action) {
  switch (action.type) {
    case REQUEST_ITEM_LIST:
    case RECEIVE_ITEM_LIST:
    default:
      return state;
  }
}

function itemDetail(state={}, action) {
  console.log('itemDetail', state, action);
  switch (action.type) {
    case RECEIVE_ITEM:
      return action.item;
    default:
      return state;
      break;
  }
}

const Reducers = combineReducers({
  router: routeReducer,
  myAction,
  itemDetail
});

export default Reducers;
