import React from 'react';
import ForecastRow from './ForecastRow';
import {format} from 'date-fns';


class WeatherForecast extends React.Component {  
    
    render(){
        // console.log(this.props.forecasts);
        console.log(this.props.forecasts);
       
        return(
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0 ${this.props.limit === 5 ? 'switch-active': '' }`}
                        onClick={()=>this.props.changeLimit(5)}>
                        5 item
                    </button>
                    <button 
                        onClick={()=>this.props.changeLimit(10)}
                        className={`forecast__switch_1 ${this.props.limit === 10 ? 'switch-active': '' }`}>
                        10 item
                    </button>
                </div>
                {this.props.forecasts.map((forecast)=>{
                    const date = new Date(forecast.time * 1000);
					const day = format(date, 'EEE');
                    const time = format(date, 'HH:mm');
               
                    return <ForecastRow 
                            day={day}
                            time={time}
                            low={this.props.unit==='c'? forecast.minCelsius: forecast.minFahrenheit}
                            high={this.props.unit==='c'? forecast.maxCelsius: forecast.maxFahrenheit}
                            key={day + time +forecast.minCelsius + forecast.maxCelsius}
                            unit={this.props.unit.toUpperCase()}
                            />
                })}
        </section>
        )
    }
};



        
        

        
    



export default WeatherForecast;