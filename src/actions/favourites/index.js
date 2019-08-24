export const ADD_CITY_TO_FAVS         =   'ADD_CITY_TO_FAVS';
export const REMOVE_CITY_FROM_FAVS    =   'REMOVE_CITY_FROM_FAVS';

export function addCityToFavs(city){
  return{
    type: ADD_CITY_TO_FAVS,
    payload: city
  };
}
export function removeCityFromFavs(city){
  return{
    type: REMOVE_CITY_FROM_FAVS,
    payload: city
  };
}
export function toggleCityInFavs(city, isFav){
  const type = !isFav ? ADD_CITY_TO_FAVS : REMOVE_CITY_FROM_FAVS;  
  return{
    type,
    payload: city
  };
}
