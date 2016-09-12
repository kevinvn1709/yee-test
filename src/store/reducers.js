import {combineReducers} from 'redux';
import SearchReducer from '../reducers/search';

const rootReducer = combineReducers({
    search: SearchReducer,
});

export default rootReducer;
