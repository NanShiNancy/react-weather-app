import React, { Component } from 'react';
import axios from 'axios';
import {format} from 'date-fns';


import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';

class App extends React.Component{
  constructor(props){
    super(props);  

    this.state = {
        forecasts: [],
        limit:10
    };
  };


  componentDidMount() {
    //fetch data
    axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
        .then((response)=> { 
            const forecasts= response.data.data.forecast.slice(0,10).map((forecast)=> {
                const date = new Date(forecast.time*1000);
                const day = format(date, 'EEE');
                const time = format(date, 'HH:mm');
                
                return { 
                    high:forecast.maxCelsius,
                    low:forecast.minCelsius,
                    day:day,
                    time: time
                };
        });
        this.setState({forecasts});                        
    });

  };
  changeLimit= (limit)=> {
    this.setState ({limit});
  };
 
  render(){
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav  />
        <Main 
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit}
          limit={this.state.limit}/>
        <Footer/>
      </div>
    );
  };

};

export default App;
