import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import ForecastDate from "./ForecastDate";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setforecast] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dayliForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDate data={dayliForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let ApiKey = "869fd32af5911e8174d6e4840a9664b5";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;

    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;

    axios.get(ApiUrl).then(handleResponse);
    return null;
  }
}
