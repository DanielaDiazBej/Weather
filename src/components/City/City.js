import React from "react";
import "./City.css";


const City = (props) => {
    const {name} = props;
    return (
        <h1 className="m-0">{name}</h1>
    );
};


export default City;