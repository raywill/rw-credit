import fetch from 'somorphic-fetch'


export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

export function requestItems() {
  return {
    type : REQUEST_ITEMS
  }
}

export function receiveItems(json) {
  return {
    type  : RECEIVE_ITEMS,
    items : json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    return fetch('http://test.xiaoheqingting.com/data.json')
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


