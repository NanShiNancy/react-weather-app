import React from 'react';
import umbrella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';


const WeatherCondition=()=> (
    <section className="weather_condition">
        <div className="weather-condition__location">Brisbane</div>
            
        
        <div className="weather-condition__temp">19C</div>

        <div className="weather-condition__desc">

            <div> 
                <img  src={umbrella} alt='umbrella'/>
                <span className="citem">20%</span>
            </div>
            <div >
                <img className="citem" src={wind} alt='wind'/>
                <span className="citem">3km/h</span>
            </div>
            <div >
                <img className="citem" src={compass} alt='compass'/>
                <span className="citem">NE</span>
            </div>
           
       </div>
    </section>
);




export default WeatherCondition;