import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

 import WeatherInfo from "./WeatherInfo";

export default function Weather(){
    
    const [ weatherData, setWeatherData] = useState({ ready : false});

function handleResponse(response){
    

    setWeatherData ( { 
        ready:true,
        date: new Date(response.data.dt*1000),
        tempreture:response.data.main.temp,
        city: response.data.name,
        humidity:response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emoji_u2600.svg/192px-Emoji_u2600.svg.png"
    })
}

if (weatherData.ready){
     return( <div><div className="weather">
         <form>
             <div className="row">
                 <div className="col-8">
                     <input type="search" placeholder="enter the city" className="col-8" />
                 </div>
                 <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-primary" />
                 </div>
             </div>
         </form>
         <WeatherInfo data={weatherData} />
     </div>
);
} else { let city ="Brisbane"
    const ApiKey ="869fd32af5911e8174d6e4840a9664b5";
    const ApiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`

    axios.get(ApiUrl).then(handleResponse);
    return ( "Loading...")}
     
</div>)}