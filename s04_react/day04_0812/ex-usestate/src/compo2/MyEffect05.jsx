import React, { useEffect, useState } from 'react';

const MyEffect05 = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('remove', resize);
        }
    }, [])


    return (
        <div>
            <h1>현재 창의 너비 : {width}</h1>
        </div>
    );
};

export default MyEffect05;