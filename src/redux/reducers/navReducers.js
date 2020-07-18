import {CHANGE_UNIT,SET_CITY_VALUE } from '../actions/navActions';


const initialState = {
    unit: 'c',
    value: '',
    city: 'Brisbane',
};


const navReducers = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_UNIT:
            const unit= state.unit==='c'?'f':'c';
            return {
                ...state,
                unit,
            };
        case SET_CITY_VALUE: 
            return {
                ...state,
                value: action.value,

            };  
        default:
            return state;
    }
};


export default navReducers;