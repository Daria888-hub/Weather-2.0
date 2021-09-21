import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTempreture from "./WeatherTempreture";

export default function WeatherInfo(props) {
    return(
    <div className = "WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li> < FormatDate date={props.data.date}/> </li>
            <li>{props.data.description}</li>
        </ul>
        <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">

                        <div className="float-left">
                            <WeatherIcons code={props.data.icon} size={52}/>
                        </div>
                        
                        <div className="float-left">
                            <WeatherTempreture celsius={props.data.tempreture} />
                        </div>
                    </div>
                </div>
<div className= "col-6">
    <ul>
        <li> Humidity = {props.data.humidity}%</li>
        <li>Wind = {Math.round(props.data.wind) }  km/h</li>
       
    </ul>

</div>
</div>
     </div>
    )

}

