import React, { useState } from 'react';
import { useGlobal } from './VarProject01';

const Ex_context_01 = () => {
    // const [count, setCount] = useState(0)
    // useGlobal은 useContext로 만든 커스텀 훅
    const { count, setCount } = useGlobal();
    return (
        <div>
            <h2>카운트 : {count}</h2>
            <button onClick={() => setCount(count + 1)}> +1 </button>
        </div>
    );
};

export default Ex_context_01;