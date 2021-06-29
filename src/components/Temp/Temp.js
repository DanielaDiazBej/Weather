import React from "react";
import "./Temp.css";

const Temp = (props) => {
    const {Temp} = props;
    return (
        <h2>{Temp} º</h2>
    );
};


export default Temp;