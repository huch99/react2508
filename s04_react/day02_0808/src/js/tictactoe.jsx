import React, { useState } from "react";

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 격자판 배열
    const [xlsNext, setXlsNext] = useState(true); // 다음 플레이어;

    // 승자 계산 함수
    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],//가로
            [0,3,6],
            [1,4,7],
            [2,5,8],//세로
            [0,4,8],
            [2,4,6] //대각선
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const isBoardFull = board.every((cell) => cell !== null);

    const handleClick = (index) => {
        if (board[index] || winner) return; // 이미 채워졌거나 승자가 있으면 무시

        const newBoard = [...board];
        newBoard[index] = xlsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXlsNext(!xlsNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXlsNext(true);
    };

    return(
        <div style={{textAlign:'center', marginTop: '50px'}}>
            <h1>틱택토 게임</h1>
            <div style={{display: 'grid', gridTemplateColumns:'repeat(3, 100px)', gap: '10px', justifyContent: 'center'}}>
                {board.map((cell, idx) => (
                    <button
                        key={idx}
                        style={{width: '100px', height: '100px', fontSize: '24px'}}
                        onClick={() => handleClick(idx)}
                    >{cell}</button>
                ))}
            </div>
            {winner ? (
                <h2>축하합니다! {winner}가 승리하였습니다.</h2>
            ) : isBoardFull ? (
                <h2>무승부입니다!</h2>
            ) : (
                <h2>{xlsNext ? 'X' : 'O'}의 차례입니다.</h2>
            )}
            <button
                onClick={resetGame}
                style={{marginTop: '20px', padding: '10px 20px', fontSize: '16px'}}
            >다시 시작</button>
        </div>
    );
}

export default TicTacToe;