import React, { useState } from 'react';
import { store_public } from './store_public';

const Ex_js_2 = () => {
    const [count, setCount] = useState(store_public.count);

    const handleClick = () => {
        store_public.increment();
        setCount(store_public.count);
    };

    return (
        <>
            <h2>카운트 : {count}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default Ex_js_2;