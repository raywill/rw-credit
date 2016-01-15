import fetch from 'isomorphic-fetch'

export const REQUEST_ITEM_LIST = 'REQUEST_ITEM_LIST'
export const RECEIVE_ITEM_LIST = 'RECEIVE_ITEM_LIST'
export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

export function requestList() {
  return {
    type : REQUEST_ITEM_LIST
  }
}

export function receiveList(json) {
  console.log('receiveList', json);
  console.log(json.data);//.map(child => child.data));
  return {
    type  : RECEIVE_ITEM_LIST,
    items : json.data, //.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function makeAPI(objs) {
  console.log('MakeAPI', objs);
  var url = 'http://weixin6.xiaoheqingting.com/app/index.php?c=entry&a=module&m=xc_credit&do=api';
  for (var key in objs) {
    url += '&' + key + '=' + objs[key];
  }
  return url;
}

export function fetchList() {
  return (dispatch, getState) => {
    dispatch(requestList());
    const state = getState();
    const weid = 18; //state.weid;
    var API = makeAPI({weid : weid, api:'goods_list'});
    return fetch(API)
      .then(req => req.json())
      .then(json => dispatch(receiveList(json)))
  }
}

function shouldFetchList(state) {
  const items = state.items;
  if (!items) {
    return true; // fetch it!
  } else {
    return false; // use cached data
  }
}



export function fetchListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchList(getState())) {
      return dispatch(fetchList());
    }
  }
}

////////// Item manuplation ////////////

export function requestItem() {
  return {
    type : REQUEST_ITEM,
    item : null
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

function shouldFetchItem(state, detailID) {
  return state.itemDetail === undefined ||
    state.itemDetail.id === undefined ||
    parseInt(state.itemDetail.id) != detailID; // fetch it!
}

export function fetchItemIfNeeded(detailID) {
  /* 这里dispatch的是一个函数，所以会被thunk调用
  *  thunk 调用的signature就是(disspatch, getState)
  */
  return (dispatch, getState) => {
    if (shouldFetchItem(getState(), detailID)) {
      console.log('doFetchItem', detailID);
      dispatch(requestItem());
      const state = getState();
      const weid = 18;//state.weid;
      var API = makeAPI({weid : weid, api : 'goods_detail', id : detailID});
      return fetch(API)
        .then(req => req.json())
        .then(json => dispatch(receiveItem(json)))
        .catch(function() {
          console.log("fetch error");
        });
    }
  }
}
