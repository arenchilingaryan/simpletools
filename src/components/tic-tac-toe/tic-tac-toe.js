import React, { Component } from 'react';
import './tic-tac-toe.css'


export default class TicTacToe extends Component {


    state = {
        squares: Array(9).fill(null),
        count: 0,
        winnerLine: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        winPerson: null,
    }

    isWinner = () => {
        let win = (this.state.count % 2 === 0) ? 'x' : 'o';
        for (let i = 0; i < 8; i++) {
            let line = this.state.winnerLine[i];
            if (this.state.squares[line[0]] === win &&
                this.state.squares[line[1]] === win &&
                this.state.squares[line[2]] === win) {
                this.setState({ winPerson: win })
                const window = document.getElementById('modalWindow')
                window.classList.remove("hide")
                setTimeout(() => {
                    this.setState({ squares: Array(9).fill(null) });
                    this.setState({ count: 0 });
                    this.setState({ winPerson: null })
                    window.classList.add("hide")
                }, 3000)
            }
        }
    }
    onClickFn = event => {
        let data = event.target.getAttribute('data');
        let currentSquares = this.state.squares;
        if (this.state.squares[data] == null) {
            currentSquares[data] = (this.state.count % 2 === 0) ? 'x' : 'o'
            this.setState({ squares: currentSquares })
            this.setState({ count: this.state.count + 1 })
        } else {
            alert('так низя')
        }
        this.isWinner()
    }

    render() {
        return (
            <div>
                <div className="app">
                    <h1>Tic Tac Toe</h1>
                    <div className="Game">
                        <div className="item" onClick={this.onClickFn} data="0">
                            {this.state.squares[0]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="1">
                            {this.state.squares[1]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="2">
                            {this.state.squares[2]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="3">
                            {this.state.squares[3]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="4">
                            {this.state.squares[4]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="5">
                            {this.state.squares[5]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="6">
                            {this.state.squares[6]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="7">
                            {this.state.squares[7]}
                        </div>
                        <div className="item" onClick={this.onClickFn} data="8">
                            {this.state.squares[8]}
                        </div>
                    </div>
                </div>
                <div id="modalWindow" className="back hide">
                    <div className="window">
                        <h1>-------  {this.state.winPerson}  -------</h1>
                        <h2>Win!</h2>
                        <p>Wait Few Second For Start Again</p>
                    </div>
                </div>
            </div>
        )
    }
};