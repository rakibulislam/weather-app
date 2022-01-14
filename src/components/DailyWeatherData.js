import React, {useEffect, useState} from "react";

function DailyWeatherData({weatherData, location}) {
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');
    const [fellsLikeTemp, setFellsLikeTemp] = useState('');
    const [currentWeather, setCurrentWeather] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');    

    function kelvinToFahrenheit(kelvinTemp){
        return Math.floor((kelvinTemp - 273.15) * 9/5 + + 32);
    }

    function processData(){
        console.log(`weatherData: ${JSON.stringify(weatherData)}`);
        setMinTemp(kelvinToFahrenheit(weatherData.main.temp_min));
        setMaxTemp(kelvinToFahrenheit(weatherData.main.temp_max));
        setCurrentTemp(kelvinToFahrenheit(weatherData.main.temp));
        setFellsLikeTemp(kelvinToFahrenheit(weatherData.main.feels_like));
        setCurrentWeather(weatherData.weather[0].main);
        setCurrentDescription(weatherData.weather[0].description);
    }

    useEffect(() => {
        processData();
    }, [])

    return (        
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/weather-app-background.jpeg'})`}} className='app'>
            <h1> Weather Today for {location} </h1>
            <h4> Temperature: {currentTemp}°F </h4>
            <h4> Fells Like: {fellsLikeTemp}°F </h4>
            <h4> Min Temp: {minTemp}°F </h4>            
            <h4> Max Temp: {maxTemp}°F </h4>
            <h4> Current Weather: {currentWeather} </h4>
            <h4> Description: {currentDescription} </h4>                                 
        </div>
    );
}

export default DailyWeatherData;
