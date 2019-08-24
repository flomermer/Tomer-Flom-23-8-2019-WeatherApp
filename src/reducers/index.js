import { combineReducers }    from 'redux';
import theme      from './theme';
import favourites from './favourites';
import city       from './city';
import unit       from './unit';

const rootReducer = combineReducers({
    favourites,
    theme,
    city,
    unit
});

export default rootReducer;
