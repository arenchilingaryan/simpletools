import React from "react";
import s from "./form.module.css";



class Form extends React.Component {
    render() {
       const { weatherMethod } = this.props
        return (
            <form className={s.form} onSubmit={weatherMethod}>
                <input id="input" className={s.input} type="text" name="city" placeholder="City..."/>
                <button className={s.button}>To Get Weather</button>
            </form>
        )
    }
}

export default Form;