import React from "react";
import "./Weather.css";
import axios from "axios";
 
export default function Weather(){

function handleResponse(response){
    console.log(response.data)
}

    let city ="Brisbane"
    const ApiKey ="869fd32af5911e8174d6e4840a9664b5";
    const ApiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`

    axios.get(ApiUrl).then(handleResponse);

    return( <div className= "weather">

    <form > 
        <div className="row">   
        <div className="col-8">
<input type="search" placeholder="enter the city" className="form-search"/>
</div>
<div className="col-3"> 
<input type="submit" value="Search" className= "btn btn-primary"/>
</div>
</div>
</form>
        <h1>Brisbane</h1>
        <ul>
            <li>Monday 12:00</li>
            <li>Sunny</li>
        </ul>
<div className="row">
<div className= "col-6">
    
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emoji_u2600.svg/192px-Emoji_u2600.svg.png" alt="20px"></img>
6 C
</div>
<div className= "col-6">
    <ul>
        <li> Humidity = 50%</li>
        <li>Wind = 100 km/h</li>
        <li>Participation = 15%</li>
    </ul>

</div>


</div>
     </div>
    )
}