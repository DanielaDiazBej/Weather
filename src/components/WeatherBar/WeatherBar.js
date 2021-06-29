import React, {Component} from 'react';
import './WeatherBar.css';
import Weather from '../Weather/Weather.js'
import {  } from 'react-bootstrap';

class WeatherBar extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="o-bar d-flex">
                <p className="o-tbar mt-0 mb-0 font-weight-bold "> Clima / &nbsp; </p> <Weather/> 
            </div>
        )
    }


};

export default WeatherBar;