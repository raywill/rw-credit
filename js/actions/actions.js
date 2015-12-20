import fetch from 'isomorphic-fetch'


export const REQUEST_ITEM_LIST = 'REQUEST_ITEM_LIST'
export const RECEIVE_ITEM_LIST = 'RECEIVE_ITEM_LIST'
export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'



export function requestItems() {
  return {
    type : REQUEST_ITEM_LIST
  }
}

export function receiveItems(json) {
  return {
    type  : RECEIVE_ITEM_LIST,
    items : json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    return fetch('http://test.xiaoheqingting.com/list.json')
      .then(req => req.json())
      .then(json => dispatch(receiveItems(json)))
  }
}

function shouldFetchItems(state) {
  const items = state.items;
  if (!items) {
    return true; // fetch it!
  } else {
    return false; // use cached data
  }
}

export function fetchItemsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems());
    }
  }
}

////////// Item manuplation ////////////

export function requestItem() {
  return {
    type : REQUEST_ITEM,
    item : 'hi'
  }
}

export function receiveItem(json) {
  console.log("receiveItem", json);
  return {
    type  : RECEIVE_ITEM,
    item : json.data,
    receivedAt: Date.now()
  }
}

export function fetchItem() {
  return dispatch => {
    dispatch(requestItem());
    return fetch('http://test.xiaoheqingting.com/item.json')
      .then(req => req.json())
      .then(json => dispatch(receiveItem(json)))
  }
}

function shouldFetchItem(state) {
  console.log('MyShould', state);
  return state.itemDetail.item === undefined; // fetch it!
}

export function fetchItemIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchItem(getState())) {
      return dispatch(fetchItem());
    }
  }
}


