import React, {Component} from 'react';
import './WeatherBar.css';
import Weather from '../Weather/Weather.js'


class WeatherBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render(){
        console.log(this.props.weather)
        return(
            <div className="o-bar d-flex">
                <p className="o-tbar mt-0 mb-0 font-weight-bold "> Clima / &nbsp; </p> <Weather weather={this.props.weather}/> 
            </div>
        )
    }


};

export default WeatherBar;