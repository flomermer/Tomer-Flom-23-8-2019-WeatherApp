export const SET_KEYWORD    =   'SET_KEYWORD';

export function setKeyword(keyword){
  return{
    type: SET_KEYWORD,
    payload: keyword
  };
}
