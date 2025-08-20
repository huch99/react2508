import React, { useEffect, useState } from 'react';

const MyEffect02 = () => {
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            console.log(`count값이 바뀔 때 마다 실행 ${count}`)
        }
        , [count])

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>카운트 + 1</button>
        </div>
    );
};

export default MyEffect02;