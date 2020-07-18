export const CHANGE_UNIT = 'CHANGE_UNIT';

export const SET_CITY_VALUE = 'SET_CITY_VALUE';


export const unitChange = unit =>({
    unit,
    type: CHANGE_UNIT,
});


export const setCityValue = value =>({
    value,
    type: SET_CITY_VALUE,
});

