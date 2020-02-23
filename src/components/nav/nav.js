import React from 'react';
import module from './nav.module.css';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className={module.header}>
            <NavLink className={module.item} to='/weather'>Weather</NavLink>
            <NavLink className={module.item} to='/tictactoe'>Tic Tac Toe</NavLink>
        </div>
    )
}

export default NavBar;