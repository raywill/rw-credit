import { combineReducers } from 'redux'

function myAction(state=[], action) {
  console.log('Reducer Action', state, action);
  return state;
}


function allGoods(state=[], action) {
}

function detail(state=[], action) {
}

const Reducers = combineReducers({myAction});

export default Reducers;
