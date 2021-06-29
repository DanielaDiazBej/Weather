import React from "react";
import "./Weather.css";

const Weather = (props) => {
  
    const {weather} = props;
    return (
        /*<h1>{weather}</h1>*/
        <p className="o-textW m-0">Soleado</p>
    );
};


export default Weather;