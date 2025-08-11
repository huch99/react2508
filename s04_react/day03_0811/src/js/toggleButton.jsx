import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <h3>Boolean 값의 상태 변화 체크</h3>
            <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
        </>
    );
}