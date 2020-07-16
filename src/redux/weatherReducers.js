import {CHANGE_LIMIT} from './weatherActions';

const initialState = {
    limit: 10,
};

const weatherReducer = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit  
            };
        default:
            return state;    
    }
};

export default weatherReducer;