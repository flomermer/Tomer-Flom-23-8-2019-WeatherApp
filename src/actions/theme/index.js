export const SET_THEME      =   'SET_THEME';

export function setTheme(theme){
  return{
    type: SET_THEME,
    payload: theme
  };
}
export function toggleTheme(theme){  
  const toggledTheme = theme==='light' ? 'dark' : 'light';
  //only for this tutorial. if theme will have more than 2 options -> we'll use setTheme instead of toggle
  return{
    type: SET_THEME,
    payload: toggledTheme
  };
}
