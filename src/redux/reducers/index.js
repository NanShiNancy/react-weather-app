import {combineReducers} from 'redux';

import weatherReducer from './weatherReducers';
import navReducers from './navReducers';

const reducers = combineReducers({
    weather: weatherReducer,
    nav: navReducers
});


export default reducers;