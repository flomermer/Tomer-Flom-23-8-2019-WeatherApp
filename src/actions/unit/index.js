export const SET_UNIT      =   'SET_UNIT';

export function setUnit(unit){
  return{
    type: SET_UNIT,
    payload: unit
  };
}
export function toggleUnit(unit){
  const toggledUnit = unit==='C' ? 'F' : 'C';
  //only for this tutorial. if unit will have more than 2 options(like Kelvin) -> we'll use setUnit instead of toggle
  return{
    type: SET_UNIT,
    payload: toggledUnit
  };
}
