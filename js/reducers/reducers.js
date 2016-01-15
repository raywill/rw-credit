import { routeReducer } from 'redux-simple-router';
import { combineReducers } from 'redux'
import {
  REQUEST_ITEM_LIST, RECEIVE_ITEM_LIST,
  REQUEST_ITEM, RECEIVE_ITEM
} from '../actions/actions'

function itemList(state=[], action) {
  console.log('====itemList', action);
  switch (action.type) {
    case REQUEST_ITEM_LIST:
      return state;
      break;
    case RECEIVE_ITEM_LIST:
      return action.items;
      break;
    default:
      return state;
      break;
  }
}

function itemDetail(state={}, action) {
  console.log('====itemDetail', state, action);
  switch (action.type) {
    case RECEIVE_ITEM:
      return action.item;
    case REQUEST_ITEM:
      return action.item; // 尽管跟RECEIVE_ITEM一样，但也需要返回，否则默认当做没有改变
    default:
      return state;
      break;
  }
}

const Reducers = combineReducers({
  router: routeReducer,
  itemDetail,
  itemList
});

export default Reducers;
