import React, {useEffect, useState} from "react";

function DailyWeatherData({weatherData}) {
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [currentWeather, setCurrentWeather] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    function kelvinToFahrenheit(kelvinTemp){    
        return Math.floor((kelvinTemp - 273.15) * 9/5 + + 32);
    }

    function getDayName(dateStr, locale) {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    function processData(){
        setMinTemp(kelvinToFahrenheit(weatherData.main.temp_min));
        setMaxTemp(kelvinToFahrenheit(weatherData.main.temp_max));
        console.log(`data: ${JSON.stringify(weatherData.dt_txt)}`);
        setCurrentWeather(weatherData.weather[0].main);
        setCurrentDate(weatherData.dt_txt);
        setCurrentDay(getDayName(weatherData.dt_txt, "en-EN"));
    }

    useEffect(() => {
        processData();
    }, [])

    return (
        <div>
            <h4> Min Temp: {minTemp} </h4>
            <h4> Max Temp: {maxTemp} </h4>
            <h4> Current Weather: {currentWeather} </h4>
            <h4> Current Date: {currentDate} </h4>
            <h4> Today: {currentDay} </h4>            
        </div>
    );
}

export default DailyWeatherData;
