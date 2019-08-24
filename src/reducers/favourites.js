import _ from 'lodash';
import {ADD_CITY_TO_FAVS, REMOVE_CITY_FROM_FAVS} from '../actions/favourites';

export default function(state=[], action){
  switch(action.type){
    case ADD_CITY_TO_FAVS:
      return [...state, action.payload];
    case REMOVE_CITY_FROM_FAVS:
      return _.filter(state, city => city.id!==action.payload.id);

    default:
      return state;
  }
}
