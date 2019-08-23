import {SET_THEME} from '../actions/theme';

export default function(state='light', action){
  switch(action.type){
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
