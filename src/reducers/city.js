import {SET_CITY} from '../actions/city';

const defaultCity = {id: '215854', name: 'Tel Aviv'};

export default function(state=defaultCity, action){
  switch(action.type){
    case SET_CITY:
      return action.payload;
    default:      
      return state;
  }
}
