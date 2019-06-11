import React,{Component} from 'react';
import './styles.css';

import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
    WINDY
} from './../../constants/weathers';

const data = {
    temperature:5,
    weatherState:SUN,
    humidity:10,
    wind: '10 m/s'
}
const data2 = {
    temperature:5,
    weatherState:WINDY,
    humidity:95,
    wind: '40 m/s'
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state ={
            city : "Buenos Aires",
            data: data
        }
    }
    handlerUpdateClick = () =>{
        console.log('Actualizando2');
        this.setState = ({
            city: "Colombia",
            data : data2
        })
    }
    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handlerUpdateClick}>Actualizar</button>
            </div>
        )
    }
};
    
export default WeatherLocation;