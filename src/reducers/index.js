import { combineReducers }    from 'redux';
import theme      from './theme';
import favourites from './favourites';

const rootReducer = combineReducers({
    favourites,
    theme
});

export default rootReducer;
