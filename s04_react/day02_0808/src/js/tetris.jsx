import React, { useState, useEffect, use } from 'react';

//블록 모양 정의
const shapes = {
    I: [
        [[1, 1, 1, 1]],
        [[1], [1], [1], [1]]
    ],
    O: [
        [[1, 1], [1, 1]]
    ],

    T: [
        [[0, 1, 0], [1, 1, 1]],
        [[1, 0], [1, 1], [1, 0]],
        [[1, 1, 1], [0, 1, 0]],
        [[0, 1], [1, 1], [0, 1]]
    ],

    L: [
        [[1, 0], [1, 0], [1, 1]],
        [[0, 0, 1], [1, 1, 1]],
        [[1, 1], [0, 1], [0, 1]],
        [[1, 1, 1], [1, 0, 0]]
    ],

    U: [
        [[0, 1], [0, 1], [1, 1]],
        [[1, 1, 1], [0, 0, 1]],
        [[1, 1], [1, 0], [1, 0]],
        [[1, 0, 0], [1, 1, 1]]
    ],

    Z: [
        [[1, 1, 0], [0, 1, 1]],
        [[0, 1], [1, 1], [1, 0]]
    ],

    W: [
        [[0, 1, 1], [1, 1, 0]],
        [[1, 0], [1, 1], [0, 1]]
    ]
};

const Rows = 20;
const Cols = 10;

// 초기 격자판 생성
const createBoard = () => Array.from({ length: Rows }, () => Array(Cols).fill(0));

const Tetris = () => {
    const [board, setBoard] = useState(createBoard());
    const [currentShape, setCurrentShape] = useState(null);
    const [shapePosition, setShapePosition] = useState({ x: 0, y: 0 });
    const [currentRotation, setCurrentRotation] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // 새 랜덤 블록 생성
    const generateShape = () => {
        const shapeNames = Object.keys(shapes);
        const randShapeName = shapeNames[Math.floor(Math.random() * shapeNames.length)];
        const newShape = shapes[randShapeName];
        const startX = Math.floor(Cols / 2) - Math.ceil(newShape[0][0].length / 2);
        const startY = 0;

        // 새 블록 위치에 충돌 검사
        if (collision(board, newShape[0], startX, startY)) {
            // 충돌이 발생하면, 즉시 게임 종료
            setGameOver(true);
        } else {
            // 충돌이 없으면 정상 배치
            setCurrentShape(newShape);
            setShapePosition({ x: startX, y: startY });
            setCurrentRotation(0);
        }
    };

    //블록 고정 및 라인 제거 처리
    const fixShape = () => {
        const newBoard = board.map(row => row.slice());
        const shapeMatrix = currentShape[currentRotation];

        shapeMatrix.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell) {
                    const bx = shapePosition.x + x;
                    const by = shapePosition.y + y;
                    if (by >= 0 && by < Rows && bx >= 0 && bx < Cols) {
                        newBoard[by][bx] = 1; //블록 위치 저장
                    }
                }
            });
        });

        //가득 찬 줄 제거
        const filteredBoard = newBoard.filter(row => row.some(cell => cell === 0));
        while (filteredBoard.length < Rows) {
            filteredBoard.unshift(Array(Cols).fill(0));
        }

        setBoard(filteredBoard);
        generateShape();


    };

    const collision = (board, shape, x, y) => {
        for (let yOffset = 0; yOffset < shape.length; yOffset++) {
            for (let xOffset = 0; xOffset < shape[yOffset].length; xOffset++) {
                if (shape[yOffset][xOffset]) {
                    const newX = x + xOffset;
                    const newY = y + yOffset;

                    // 범위 체크
                    if (newX < 0 || newX >= Cols || newY >= Rows) {
                        return true; // 범위 벗어나면 충돌로 간주
                    }

                    // 이미 블록이 존재하는지도 검사
                    if (newY >= 0 && board[newY][newX]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    const move = (dx, dy) => {
        if (gameOver) return;

        const newX = shapePosition.x + dx;
        const newY = shapePosition.y + dy;
        if (!collision(board, currentShape[currentRotation], newX, newY)) {
            setShapePosition({ x: newX, y: newY });
        } else if (dy === 1) {
            //아래 충돌 시 블록 고정 후 새 블록 생성
            fixShape();
        }
    };

    const rotate = () => {
        if (gameOver) return;
        const newRotation = (currentRotation + 1) % currentShape.length;
        const newShape = currentShape[newRotation];

        // 회전 후 위치를 여러 방법으로 조정 가능
        let newX = shapePosition.x;

        // 회전 후 위치에서 충돌 또는 범위 검사
        if (!collision(board, newShape, newX, shapePosition.y)) {
            // 충돌 없음, 회전 적용
            setCurrentRotation(newRotation);
        } else {
            // 충돌 또는 범위 초과 시 위치 조정 또는 무효
            // 예: 오른쪽/왼쪽으로 이동 시도해보기
            // (이 부분은 구현 방식에 따라 달라짐)
        }
    };





    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') move(-1, 0);
            if (e.key === 'ArrowRight') move(1, 0);
            if (e.key === 'ArrowDown') move(0, 1);
            if (e.key === 'ArrowUp') rotate();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentShape, shapePosition, currentRotation, board, gameOver]);

    useEffect(() => {
        if (gameOver) return;
        const interval = setInterval(() => {
            move(0, 1);
        }, 500); //0.5초마다 하강

        return () => clearInterval(interval);
    }, [shapePosition, currentShape, currentRotation, board, gameOver]);

    //새 게임 시작
    useEffect(() => {
        generateShape();
    }, []);

    //블록 렌더링
    const renderBoard = () => {
        const displayBoard = board.map(row => row.slice());

        if (currentShape) {
            currentShape[currentRotation].forEach((row, yIdx) => {
                row.forEach((cell, xIdx) => {
                    if (cell) {
                        const bx = shapePosition.x + xIdx;
                        const by = shapePosition.y + yIdx;
                        if (by >= 0 && by < Rows && bx >= 0 && bx < Cols) {
                            displayBoard[by][bx] = 2; //현재 블록
                        }
                    }
                });
            });
        }

        return displayBoard.map((row, y) => (
            <div key={y} style={{ display: 'flex' }}>
                {row.map((cell, x) => (
                    <div
                        key={x}
                        style={{
                            width: 30,
                            height: 30,
                            border: '1px solid #999',
                            backgroundColor: cell === 0 ? 'white' : cell === 1 ? 'black' : 'red'
                        }}
                    ></div>
                ))}
            </div>
        ));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>테트리스</h1>
            {renderBoard()}
            {gameOver && <h2>게임 오버</h2>}
            <button onClick={() => { setBoard(createBoard()); generateShape(); setGameOver(false); }}>다시 시작</button>
        </div>
    );
};

export default Tetris;