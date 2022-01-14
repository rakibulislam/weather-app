import React, {useEffect, useState} from "react";
import DailyWeatherData from "./DailyWeatherData";

function WeatherDataContainer() {
    const API_KEY = 'eff04efa5709d18068cb132cce23a366';

    const [data, setData] = useState('');
    const [location, setLocation] = useState('');

    function fetchWeatherData(loc) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${API_KEY}`)
        .then((r) => r.json())
        .then(data => {
            // console.log(`data from api: ${JSON.stringify(data.list[0].main)}`);
            setData(data.list[0]);
        })
    }

    function fetchCurrentLocation() {
        fetch("https://geolocation-db.com/json/")
        .then((r) => r.json())
        .then(data => {
            // console.log(`data from api: ${JSON.stringify(data)}`);
            setLocation(data.country_name);
            fetchWeatherData(data.country_name);
        })
    }

    useEffect(() => {
        fetchCurrentLocation();
    }, [])

    if (data === '') {
        return <div> Loading! </div>
    }

    console.log(`data: ${JSON.stringify(data)} | location: ${location}`);

    return (        
        <div style={{
            backgroundImage: `url(require("images/weather-app-background.jpeg"))`
        }} className="body-app">
            <DailyWeatherData weatherData={data} location={location} />
        </div>
    );
}

export default WeatherDataContainer;
