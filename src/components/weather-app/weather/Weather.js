import React from "react";
import modules from './Weather.module.css';



const Weather = props => {

    const getTempValue = props.temp / 0.8;
    const tempCelsius = Math.round(getTempValue)

    return (
        <div className={modules.content}>
            {props.city &&
                <div>
                    <h2 className={modules.mainInfo}>
                        {props.onIcon()}
                        {tempCelsius} °C
                    </h2>
                    <p>{props.city}, {props.country}</p>
                    <p>Sunset: {props.sunset}</p>
                </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default Weather;