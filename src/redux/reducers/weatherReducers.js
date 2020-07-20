import {CHANGE_LIMIT, FETCH_DATA, FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from '../actions/weatherActions';

const initialState = {
    limit: 10,
    city: '',
    current: {},
    forecasts: [],
    isLoading: false,
    error: null,
};

const weatherReducer = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit  
            };
        case FETCH_DATA:
            return {
                ...state,
               isLoading: true, 
            };
        case FETCH_DATA_SUCCESS:
            //  console.log('sus', action.data.data.data.city);
            const forecasts= action.data.data.data.forecast.slice(0,10);
            const city= action.data.data.data.city.name;
            const current = action.data.data.data.current;
            return{
                ...state,
                isLoading: false,
                city,
                current,
                forecasts
            } 
        case FETCH_DATA_FAILURE:    
            return{
                ...state,
                error: action.error,
                isLoading: false
            } 
        default:
            return state;    
    }
};

export default weatherReducer;