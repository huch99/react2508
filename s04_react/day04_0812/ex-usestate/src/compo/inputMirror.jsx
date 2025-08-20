import { useState } from "react";

export default function InputMirror() {
    const [inputMirror, setInputMirror] = useState('');
    return (
        <>
            <input type="text" onChange={(e) => { setInputMirror(e.target.value) }}
                style={{
                    width: '200px',
                    height: '50px',
                    fontSize: '15px',
                    paddingLeft: '10px'
                }} />

            <div
                style={{
                    width: '200px',
                    height: '50px',
                    fontSize: '15px',
                    padding: '10px',
                    border: '1px solid #000',
                    marginTop: '10px'
                }}>
                {inputMirror} </div>
        </>
    );
}