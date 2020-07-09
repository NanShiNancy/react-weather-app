import React from 'react';
import ForecastRow from './ForecastRow';



class WeatherForecast extends React.Component {  
    
    render(){
        
        return(
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className={`forecast__switch_0 ${this.props.limit === 5 ? 'switch-active': '' }`}
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
                    return <ForecastRow 
                            key={forecast.day + forecast.time + forecast.low + forecast.high}
                            day={forecast.day}
                            time={forecast.time}
                            low={forecast.low}
                            high={forecast.high}
                            />
                })}
            

        </section>
        )
    }
};



        
        

        
    



export default WeatherForecast;