import React from "react";
import "./City.css";

const City = (props) => {
   /* const name = props.city;*/
   //Destructuring
    const {city} = props;
    return (
        /*<h1>{city}</h1>*/
        <h1 className="m-0">SANTIAGO DE CALI</h1>
    );
};


export default City;