import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function forecastDate(props){ 

  function maxTempreture(){
    let tempreture = Math.round(props.data.temp.max)
    return `${tempreture}`
  }

  function minTempreture(){
    let tempreture = Math.round(props.data.temp.min)
    return `${tempreture}`
  }

  function day (){
    let date = new Date(props.data.dt*1000);
    let day = date.getDay()
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut", ]
    return days[day]
  }
    return(
      
        <div>
     
        <div className="tempreture- day">{ day()}</div>
            <WeatherIcons code={props.data.weather[0].icon} size={40} />
            <div className="tempretureForecast">
              <span className="tempreture-max">{maxTempreture()}°</span>|
              <span className="tempreture-min">{minTempreture()}°</span>
            </div>
            </div>
    )

    }