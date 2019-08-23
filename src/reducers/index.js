import { combineReducers }    from 'redux';
import theme      from './theme';
import favourites from './favourites';
import keyword    from './keyword';
import city       from './city';

const rootReducer = combineReducers({
    favourites,
    theme,
    keyword,
    city
});

export default rootReducer;
