import axios from "axios";
import { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ city }) => {
    const [ weatherData, setWeatherData ] = useState(["","","",""])
    useEffect( () => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
            .then(response => {
                setWeatherData([
                    response.data.main.temp,
                    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                    response.data.weather[0].main,
                    response.data.wind.speed,
                    response.data.wind.deg ])
            })
    }, [])

    return (
        <div>
            <h2>Weather in {city}</h2>
            <div>
                <div><b>temperature:</b> {weatherData[0]} ℃</div>
                <div>
                    <img src={weatherData[1]} alt={`Icon for ${weatherData[2]}`} />
                    <div>{weatherData[2]}</div>
                </div>
                <div><b>wind:</b> {weatherData[3]} mph with a degree of {weatherData[4]}</div>
            </div>
        </div>
    )
    
}
 
export default Weather;