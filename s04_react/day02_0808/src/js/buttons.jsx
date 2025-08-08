import React, { useState } from "react";

function Buttons() {
    const [a, setA] = useState('');
    const [btns, setBtns] = useState([
        { sub: '기아', model: '모닝' },
        { sub: '현대', model: '싼타페' },
        { sub: '벤츠', model: 'CLS' },
        { sub: '아우디', model: 'R8' },
        { sub: '람보르기니', model: '아벤타도르' },
        { sub: '포르쉐', model: '타이칸' }
    ]);
    const [insert, setInsert] = useState('');
    const [insert2, setInsert2] = useState('');

    const submit = (e) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지

        // 배열을 복제하여 새 항목을 추가
        setBtns([...btns, { sub: insert, model: insert2 }]);

        // 입력값 초기화
        setInsert('');
        setInsert2('');
    };

    return (
        <div>
            {btns.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => (
                        setA(`제 차는 ${btn.sub}사의 '${btn.model}' 모델입니다.`)
                    )}
                >
                    {btn.sub}
                </button>
            ))}
            <button onClick={() => setA('')}>취소</button>
            <h1>{a}</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={insert}
                    onChange={(e) => setInsert(e.target.value)}
                    placeholder="제조사"
                    id='inpSub'
                />
                <input
                    type="text"
                    value={insert2}
                    onChange={(e) => setInsert2(e.target.value)}
                    placeholder="모델"
                    id='inpModel'
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );
}
export default Buttons;