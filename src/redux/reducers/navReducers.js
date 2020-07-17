import {CHANGE_UNIT} from '../actions/navActions'; 


const initialState = {
    unit: 'c',
};


const navReducers = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_UNIT:
            const unit= state.unit==='c'?'f':'c';
            return {
                ...state,
                unit,
            };
        default:
            return state;
    }
};


export default navReducers;