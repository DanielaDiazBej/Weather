import React from "react";
import "./Date.css";

const Date = (props) => {
   /* const name = props.city;*/
   //Destructuring
    const {date} = props;
    return (
        /*<h1>{date}</h1>*/
        <p className="m-0">16 Abril 2021</p>
    );
};


export default Date;