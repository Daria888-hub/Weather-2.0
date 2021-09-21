import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function forecastDate(props){ 
    return(
        <div>
        <div className="tempreture- day">{props.data.dt }</div>
            <WeatherIcons code={props.data.weather[0].icon} size={40} />
            <div className="tempretureForecast">
              <span className="tempreture-max">{Math.round(props.data.temp.max)}°</span>|
              <span className="tempreture-min">{Math.round(props.data.temp.min)}°</span>
            </div>
            </div>
    )

    }