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

  render(){
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav />
        <Main />        
        <Footer />
      </div>
    );
  };

};

const mapDispatchToProps = dispatch =>({
  fetchWeatherData : city=> dispatch (fetchDataThunkAction(city)),
});
export default connect(null,mapDispatchToProps)(App);
