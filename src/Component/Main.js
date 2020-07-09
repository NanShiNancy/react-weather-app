import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

const Main = (props) => ( 
  
< main  >
  <WeatherCondition />
  <WeatherForecast 
    forecasts={props.forecasts}
    changeLimit={props.changeLimit}
    limit={props.limit}/>
    
</ main>

);


export default Main;