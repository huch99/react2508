import React, { use, useEffect, useState } from 'react';

const MyEffect03 = () => {
    const [seconds, setSecounds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecounds(seconds + 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, )

    return (
        <div>
            <h1>{seconds} 초 경과</h1>
        </div>
    );
};

export default MyEffect03;