import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
    return(
    <div className = "WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li> < FormatDate date={props.data.date}/> </li>
            <li>{props.data.description}</li>
        </ul>
<div className="row">
<div className= "col-6">
    <WeatherIcons code={props.data.icon}/>

<span className="tempreture"> {Math.round(props.data.tempreture)} </span> 
<span className="unit"> C</span>
</div>
<div className= "col-6">
    <ul>
        <li> Humidity = {props.data.humidity}%</li>
        <li>Wind = {props.data.wind}  km/h</li>
       
    </ul>

</div>
</div>
     </div>
    )

}

