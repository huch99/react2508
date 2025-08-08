import React, { useState, useEffect } from 'react';

function Rsp() {
    const [mySelect, setMySelect] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [btn, setBtn] = useState(['시작하기']);
    const [victory, setVictory] = useState(0);
    const [fail, setFail] = useState(0);
    const [draw, setDraw] = useState(0);

    // 내 선택과 컴퓨터 선택이 변경될 때마다 결과 계산
    useEffect(() => {
        if (mySelect && computerChoice) {
            if (mySelect === computerChoice) {
                setResult('무승부입니다!');
                setDraw(draw + 1);
            } else if (
                (mySelect === '✌' && computerChoice === '🖐') ||
                (mySelect === '✊' && computerChoice === '✌') ||
                (mySelect === '🖐' && computerChoice === '✊')
            ) {
                setResult('승리 했습니다!');
                setVictory(victory + 1);
            } else {
                setResult('패배 했습니다.');
                setFail(fail + 1);
            }
        }
    }, [mySelect, computerChoice]); // 의존성 배열에 같이 넣기

    const handleClick = (e) => {
        const value = e.target.value;

        if (value === '시작하기') {
            setBtn(['✌', '✊', '🖐']);
        } else {
            setMySelect(value);
            const choices = ['✌', '✊', '🖐'];
            const randIdx = Math.floor(Math.random() * 3);
            setComputerChoice(choices[randIdx]);
        }
    };

    return (
        <div>
            <h1>가위바위보</h1>
            <div className="bigBox">
                <div className='box'>나 : <br/><span>{mySelect}</span></div>

                <div className='box'>컴퓨터 : <br/><span>{computerChoice}</span></div>
            </div>
            
            {btn.map((bt, index) => (
                <button key={index} value={bt} className={bt} onClick={handleClick}>{bt}</button>
            ))}

            <div className='result'>{result}</div>
            <div className='result'>{victory}승 {draw}무 {fail}패</div>
            <button onClick={() => (
                setDraw(0),setVictory(0),setFail(0),setMySelect(''),setComputerChoice(''),setResult(''),setBtn(['시작하기'])
            )}>다시하기</button>
        </div>
    );
}

export default Rsp;