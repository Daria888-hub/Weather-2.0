import react from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="tempreture- day">Tue</div>
          <WeatherIcons code="03d" />
          <div className="tempretureForecast">
            <span className="tempreture-max">19</span>|
            <span className="tempreture-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
