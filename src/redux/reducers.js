import {combineReducers} from 'redux';

import weatherReducer from './weatherReducers';

const reducers = combineReducers({
    weather: weatherReducer,
});


export default reducers;