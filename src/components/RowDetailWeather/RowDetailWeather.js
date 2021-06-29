import React  from 'react';
import './Row.css';


function RowDetailWeather({icon, variableW, value}) {

    
    return (
        <div className="o-row d-flex justify-content-between">
           
            <span className="d-flex">
                <img  src={icon}/><p className="o-dateV">{variableW}</p>
                </span>
            <span>{value}</span>
        </div>
    )
}



export default RowDetailWeather

