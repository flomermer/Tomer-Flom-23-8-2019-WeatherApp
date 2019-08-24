import {SET_UNIT} from '../actions/unit';

export default function(state='C', action){
  switch(action.type){
    case SET_UNIT:      
      return action.payload;
    default:
      return state;
  }
}
