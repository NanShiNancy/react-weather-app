import React from 'react';
import {getWeatherFor} from './utils/axios';
import {connect} from 'react-redux';


import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';
import {fetchDataThunkAction} from './redux/weatherActions';


class App extends React.Component{
  constructor(props){
    super(props);  

    this.state = {
        input:'',
        unit: 'c',
    };
  };
  componentDidMount(){
    this.props.fetchWeatherData('Brisbane');
  }
    //fetch data
 
  toggleUnit = () => {
    this.setState(state => ({unit: state.unit ==='c'? 'f' : 'c'}));
  }
 
  onchangeInputHandeler=event=> {
		this.setState({input: event.target.value});
	};

  citySearchHandler=()=>{
    getWeatherFor(this.state.input).then(this.updateWeather)
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
          unit={this.state.unit}/>        
        <Footer />
      </div>
    );
  };

};


const mapStateToProps = state => ({
  limit: state.weather.limit,
  
});

const mapDispatchToProps = dispatch =>({
  fetchWeatherData : city=> dispatch (fetchDataThunkAction(city)),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
