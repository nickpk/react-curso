import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types';

import {
        CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY
} from '../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={SUN}/>
        <WeatherExtraInfo 
            humidity={80} 
            wind={"10 m/s"}/>
    </div>
);

WeatherData.PropTypes = {
    data: PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired,
    })
}

export default WeatherData; 