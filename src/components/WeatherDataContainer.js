import React, {useEffect, useState} from "react";
import DailyWeatherData from "./DailyWeatherData";

function WeatherDataContainer() {
    const cityName = 'Toronto';
    const API_KEY = '7f98faafd273743054dd8af038877963';

    const [dataList, setDataList] = useState([]);

    function fetchWeatherData() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
        .then((r) => r.json())
        .then(data => {                
            setDataList(data.list.slice(0,3));
        })
    }

    useEffect(() => {
        fetchWeatherData();
    }, [])

    return (
        <div className='container'>
            <h3> Weather Today for {cityName} </h3>
            { dataList.map((weatherData) => {
                    return <WeatherDataContainer weatherData={weatherData} />;
                })

            }
        </div>
    );
}

export default WeatherDataContainer;
