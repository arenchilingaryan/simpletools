import React from 'react';
import WeatherApp from './components/weather-app/weather-app';
import TicTacToe from './components/tic-tac-toe/tic-tac-toe';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/nav/nav';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/weather" component={WeatherApp} />
            <Route path="/tictactoe" component={TicTacToe} />
        </BrowserRouter>
    )
}

export default App;