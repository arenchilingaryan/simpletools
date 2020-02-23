import React from 'react';
import module from './weather-app.module.css';
import Info from './info/info'
import Form from "./form/form";
import Weather from "./weather/Weather";
import Loading from './loading/loading';
import ErrorMessage from './error-message/error';

import d01 from './icons/01d.png';
import d02 from './icons/02d.png';
import d03 from './icons/03d.png';
import d04 from './icons/04d.png';
import d09 from './icons/09d.png';
import d10 from './icons/10d.png';
import d11 from './icons/11d.png';
import d13 from './icons/13d.png';
import d50 from './icons/50d.png';

import n01 from './icons/01n.png';
import n02 from './icons/02n.png';
import n03 from './icons/03n.png';
import n04 from './icons/04n.png';
import n09 from './icons/09n.png';
import n10 from './icons/10n.png';
import n11 from './icons/11n.png';
import n13 from './icons/13n.png';
import n50 from './icons/50n.png';


const API_KEY = "9872cb4e2be21e4a83e0a723d176a3dd";



class WeatherApp extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        icon: '',
        error: false,
        loading: false
    }



    gettingMethod = async (e) => {
        e.preventDefault();

        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunset: undefined,
            icon: undefined,
            error: false,
            loading: true
        })

        let city = e.target.city.value;



        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            if (api_url.ok) {
                let sunset = data.sys.sunset;
                let date = new Date();
                date.setTime(sunset);
                let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    sunset: sunset_date,
                    icon: data.weather[0].icon,
                    error: false,
                    loading: false
                });
            } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunset: undefined,
                    icon: undefined,
                    error: true,
                    loading: false
                })
            }
        }
    }
    
    onIconSelect = () => {
        switch (this.state.icon) {
            case '01d':
            return <img src={d01} alt="sorry bro :'(" />
            case '02d':
            return <img src={d02} alt="sorry bro :'(" />
            case '03d':
            return <img src={d03} alt="sorry bro :'(" />
            case '04d':
            return <img src={d04} alt="sorry bro :'(" />
            case '09d':
            return <img src={d09} alt="sorry bro :'(" />
            case '10d':
            return <img src={d10} alt="sorry bro :'(" />
            case '11d':
            return <img src={d11} alt="sorry bro :'(" />
            case '13d':
            return <img src={d13} alt="sorry bro :'(" />
            case '50d':
            return <img src={d50} alt="sorry bro :'(" />
            case '01n':
            return <img src={n01} alt="sorry bro :'(" />
            case '02n':
            return <img src={n02} alt="sorry bro :'(" />
            case '03n':
            return <img src={n03} alt="sorry bro :'(" />
            case '04n':
            return <img src={n04} alt="sorry bro :'(" />
            case '09n':
            return <img src={n09} alt="sorry bro :'(" />
            case '10n':
            return <img src={n10} alt="sorry bro :'(" />
            case '11n':
            return <img src={n11} alt="sorry bro :'(" />
            case '13n':
            return <img src={n13} alt="sorry bro :'(" />
            case '50n':
            return <img src={n50} alt="sorry bro :'(" />
            default :
            return <img src={d01} alt="sorry bro :'(" />
        }
        
    }

    onBackFn = () => {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunset: undefined,
            icon: undefined,
            error: false,
            loading: false
        })
    }

    render() {        
        const elements = this.state.error ? <ErrorMessage onBackFn={this.onBackFn} /> :
            <div>                
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunset={this.state.sunset}
                    icon={this.state.icon}
                    error={this.state.error}
                    onIcon={this.onIconSelect}
                />
            </div>
            const returnItems = this.state.loading ? <Loading /> : elements
        return (
            <div className={module.weatherApp}>
                <Info />
                <Form weatherMethod={this.gettingMethod} />
                { returnItems }
            </div>
        )
    }
}

export default WeatherApp;