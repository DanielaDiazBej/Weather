import React from "react";
import "./Weather.css";

const Weather = (props) => {
   /* const name = props.city;*/
   //Destructuring
    const {weather} = props;
    return (
        /*<h1>{city}</h1>*/
        <p className="o-textW m-0">Soleado</p>
    );
};


export default Weather;