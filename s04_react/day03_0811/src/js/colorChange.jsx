import { useState } from "react";

export default function ColorChange() {
    const [color, setColor] = useState('purple');

    const [colorList, setColorList] = useState(['red','blue', 'yellow', 'green']);

    return (
        <>
            <h3>스타일 값의 상태 변화 체크</h3>
            <h2 style={{color}}>색상 변경</h2>
            <button value={'red'} onClick={(e) => (setColor(e.target.value))}>빨강</button>
            <button value={'blue'} onClick={(e) => (setColor(e.target.value))}>파랑</button>
            <button value={'yellow'} onClick={(e) => (setColor(e.target.value))}>노랑</button>
            <button value={'green'} onClick={(e) => (setColor(e.target.value))}>초록</button>

            {colorList.map((clr, index) => (
                <button value={clr} onClick={(e) => (setColor(e.target.value))} key={index}> {clr} </button>
            ))}
        </>
    );
}