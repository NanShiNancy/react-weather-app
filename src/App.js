import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import Header from './Component/Header';
import Nav from './Component/Navigation';
import Main from './Component/Main';
import Footer from './Component/Footer';
import {fetchDataThunkAction} from './redux/actions/weatherActions';

class App extends React.Component{
  componentDidMount(){
    this.props.fetchWeatherData('Brisbane');
  };

renderMain(){
  if(this.props.hasError){
    return "Something went wrong...";
  }else{
    return <Main/>;
  }
};
  
  render(){
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav />
        {this.props.isLoading? "is Loading...": this.renderMain()}     
        <Footer />
      </div>
    );
  };

};

const mapStateToProps = (state)=> ({
  hasError: !!state.weather.error,
  isLoading: state.weather.isLoading,
});

const mapDispatchToProps = dispatch =>({
  fetchWeatherData : city=> dispatch (fetchDataThunkAction(city)),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
