import React from 'react';

// imports components
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => (
    <div>
        <Location city={"Buenos Aires"}></Location>
        <WeatherData></WeatherData>
    </div>
);
    
export default WeatherLocation;