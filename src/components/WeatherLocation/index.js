import React from 'react';
import './styles.css';

import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN
} from './../../constants/weathers';

const data = {
    temperature:5,
    weatherState:SUN,
    humidity:10,
    wind: '10 m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Buenos Aires"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
    
export default WeatherLocation;