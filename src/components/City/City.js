import React from "react";
import "./City.css";
import getWeather from '../../service/weather.js';


const City = (Weather) => {
   /* const name = props.city;*/
   //Destructuring
    const {name} = Weather;
    return (
        <h1>{name}</h1>
        // <h1 className="m-0">SANTIAGO DE CALI</h1>
    );
};


export default City;