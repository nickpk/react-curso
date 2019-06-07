import React from 'react';
import './styles.css';

import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Buenos Aires"}></Location>
        <WeatherData></WeatherData>
    </div>
);
    
export default WeatherLocation;