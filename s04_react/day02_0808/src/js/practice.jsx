import React, { useState } from "react";
// import '../App.css'

import Book from "./book";
import Library from "./library";
import Buttons from "./buttons";
import Component from "./component";
import Car from "./mycar";

import Rsp from "./rsp";
import TicTacToe from "./tictactoe";
import Tetris from "./tetris";

function Practice() {    
    
    return (
       <div className="container">
        <h1>오늘의 수업은...?</h1>
        
        <Tetris/>
       </div>
    );
}

export default Practice;