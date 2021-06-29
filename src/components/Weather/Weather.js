import React from "react";
import "./Weather.css";

const Weather = (props) => {
  
    const {weather} = props;
    console.log(weather);
    return (
        <p className="o-textW m-0">{weather}</p>
        
    );
};


export default Weather;