import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <button onClick={() => { setIsOn(!isOn) }}> {isOn ? 'ON' : 'OFF'} </button>
        </>
    );
}