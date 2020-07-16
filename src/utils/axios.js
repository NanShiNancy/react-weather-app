
import axios from 'axios';

export const getWeatherFor = city =>{
    const url= `https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=${city}`;
    return axios(url);
};

