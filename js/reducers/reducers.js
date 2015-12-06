import { combineReducers } from 'redux'

function myAction(state=[], action) {
  console.log(state, action);
  return state;
}

const Reducers = combineReducers({myAction});

export default Reducers;
