import React from 'react';
import {connect} from 'react-redux';
import { unitChange, setCityValue } from '../redux/actions/navActions';
import {fetchDataThunkAction} from '../redux/actions/weatherActions';



function Nav (props) {
	
	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			props.fetchWeatherData(props.input);
		}
	};
    return (
		<nav>	  	
				<input className="search-input" 
						onChange={event=>props.set_city_value(event.target.value)}
						onKeyPress={handleKeyPress}/>
                <button 
                    className="search-btn"
                    onClick={()=>props.fetchWeatherData(props.input)}
                    >
					<i className="fa fa-search" aria-hidden={true}/>
				</button>

				<button onClick={props.toggleUnit} className="temp-switch">
					<i 
						className="fa fa-thermometer-empty temp-switch__icon" aria-hidden={true}/>
					<sup>&deg;</sup> {props.unit.toUpperCase()}
				</button>
		  	
		</nav>
	);
};
	
const mapStateToProps = state => ({
	unit: state.nav.unit,
	input: state.nav.value,
});
  
const mapDispatchToProps = dispatch =>({
	toggleUnit: () => dispatch (unitChange()),
	set_city_value: (value) => dispatch(setCityValue(value)),
	fetchWeatherData : city=> dispatch (fetchDataThunkAction(city)),
});
  export default connect(mapStateToProps,mapDispatchToProps)(Nav);