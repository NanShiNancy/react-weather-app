import React from 'react';
import {getWeatherFor} from './utils/axios';

import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';

class App extends React.Component{
  constructor(props){
    super(props);  

    this.state = {
        input:'',
        forecasts: [],
        limit:10,
        city: '',
        current: {},
        unit: 'c',
    };
  };


  componentDidMount(){
    getWeatherFor('brisbane')
    .then(this.updateWeather);
  }
    //fetch data
 
  toggleUnit = () => {
    this.setState(state => ({unit: state.unit ==='c'? 'f' : 'c'}));
  }
  
  changeLimit= (limit)=> {
    this.setState ({limit});
  };
 
  onchangeInputHandeler=event=> {
		this.setState({input: event.target.value});
	};

  citySearchHandler=()=>{
    getWeatherFor(this.state.input).then(this.updateWeather)
  };

  updateWeather=res=>{
      const forecasts= res.data.data.forecast.slice(0,10);
      const city= res.data.data.city.name;
      const current = res.data.data.current;
      this.setState({forecasts, city, current});                        
  };

  
  render(){
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav 
          inputValue={this.state.input}
          onchangeInputHandeler={this.onchangeInputHandeler} 
          CitySearchHandler={this.citySearchHandler}
          toggleUnit={this.toggleUnit}
          unit={this.state.unit}/>
          
        <Main 
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
          city={this.state.city}
          current={this.state.current}
          unit={this.state.unit}/>
          
        <Footer />
      </div>
    );
  };

};

export default App;
