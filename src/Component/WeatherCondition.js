import React from 'react';
import umbrella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';

import {connect} from 'react-redux';


function WeatherCondition (props){
   return(
    <section className="weather-condition" >
        <div className="weather-condition__location">{props.city}</div>

        <div className="weather-condition__temp">{props.unit === 'c' ? props.current.maxCelsius :props.current.maxFahrenheit}{props.unit.toUpperCase()}</div>

        <div className="weather-condition__desc">

            <div> 
                <img src={umbrella} alt='umbrella'/>
                <span className="citem">{props.current.humidity + '%'}</span>
            </div>
            <div >
                <img src={wind} alt='wind'/>
                <span className="citem">{props.current.windSpeed + 'km/h'}</span>
            </div>
            <div >
                <img  src={compass} alt='compass'/>
                <span className="citem">{props.current.windDirection}</span>
            </div>
           
       </div>
    </section>
   ) 
};

const mapStateToProps = state =>({
    current:state.weather.current,
    city:state.weather.city, 
    unit: state.nav.unit,
});



export default connect(mapStateToProps)(WeatherCondition);