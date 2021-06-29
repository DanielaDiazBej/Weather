import React from "react";
import "./Date.css";

const DateW = () => {
    const date = new Date().toUTCString().slice(5,16);
    return (
        /*<h1>{date}</h1>*/
        <p className="m-0">{date}</p>
    );
};


export default DateW;