import React from "react";
import "./Temp.css";

const Temp = (props) => {
   /* const name = props.city;*/
   //Destructuring
    const {Temp} = props;
    return (
        /*<h1>{Temp}</h1>*/
        <h2>31º</h2>
    );
};


export default Temp;