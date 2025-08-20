import { useState } from "react";

export default function ColorChange() {
    const [textColor, setTextColor] = useState('white');
    const [colors, setColors] = useState([
        {colorName: 'pink', tagName: '핑크'},
        {colorName: 'skyblue', tagName: '하늘'},
        {colorName: 'lightgreen', tagName: '연초록'},
        {colorName: 'purple', tagName: '보라'}
    ]);

    return (
        <>
            <div 
            style={{
                color: textColor, 
                width: '300px', 
                height: '100px', 
                backgroundColor: '#000',
                fontSize: '1.5em',
                padding: '10px'
                }}>색상 변경</div>
            {colors.map((color, index) => (
                <button key={index} onClick={() => {setTextColor(color.colorName)}}>{color.tagName}</button>
            ))}
        </>
    );
}