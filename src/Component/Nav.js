import React from 'react';
import {connect} from 'react-redux';
import { changeUnit } from '../redux/actions/navActions';



const Nav = (props)=> (
    <nav>
		  	
				<input className="search-input" onChange={props.onchangeInputHandeler}/>
                <button 
                    className="search-btn"
                    onClick={props.CitySearchHandler}
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


const mapStateToProps = state => ({
	unit: state.nav.unit,
});
  
const mapDispatchToProps = dispatch =>({
	toggleUnit: () => dispatch (changeUnit()),
});
  export default connect(mapStateToProps,mapDispatchToProps)(Nav);