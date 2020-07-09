import React from 'react';







const ForecastRow= (props)=> (
    <div className="weather-forecast__row">
        <span className="weather-forecast__day">{props.day}</span>
        <span className="weather-forecast__icon">{props.time}</span>
        <span className="weather-forecast__high">{props.high}</span>
        <span className="weather-forecast__low">{props.low}</span>
        
    </div>
    
);

export default ForecastRow;