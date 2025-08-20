import React, { useEffect } from 'react';

const MyEffect = () => {
    useEffect(
        () => {
            console.log('컴포넌트가 마운트 되었습니다.');
        },[])

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default MyEffect;