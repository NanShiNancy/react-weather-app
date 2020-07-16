import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

const Main = (props) => ( 
  
< main className="flex-centered" >
  <WeatherCondition 
    className="weather-condition"
    city={props.city}
    current={props.current}
    unit={props.unit}/>
  <WeatherForecast
    className="weather-forecast"
    city={props.city}
    forecasts={props.forecasts}
    changeLimit={props.changeLimit}
    limit={props.limit}
    unit={props.unit}/>
    
</ main>

);


export default Main;