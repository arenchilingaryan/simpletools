import React from "react";
import info from "./info.module.css";



class Info extends React.Component {
    render() {
        return (
            <div className={info.content}>
                <h1>Weather App</h1>
            </div>
        )
    }
}

export default Info;