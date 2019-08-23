import {SET_KEYWORD} from '../actions/keyword';

export default function(state='', action){
  switch(action.type){
    case SET_KEYWORD:
      return action.payload;
    default:
      return state;
  }
}
