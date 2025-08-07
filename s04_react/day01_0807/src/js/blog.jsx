import React, { useState } from "react";

function Blog() {
    const myInfo = { id: 'huichan58', pw: '1234', userName: '정희찬' };

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [logInMessage, setLoginMessage] = useState('');
    const [loginValue, setLoginValue] = useState(false);

    const login = (e) => {
        e.preventDefault(); // 중요한 부분입니다.
        if (loginValue === false) {
            if (userId === myInfo.id && userPw === myInfo.pw) {
                setLoginMessage(`${myInfo.userName}님 반갑습니다.`);
                setLoginValue(true);
            } else {
                alert('아이디 또는 비밀번호가 틀렸습니다.');
            }
        }

        document.querySelector('form').style.display = 'none';
    };

    return (
        <div className="container">
            <form onSubmit={login}>
                <input
                    type="text"
                    id='userId'
                    placeholder="아이디"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="password"
                    id="userPw"
                    placeholder="비밀번호"
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                />

                <button type="submit">로그인</button>
            </form>

            <div className="header">
                <h1>코딩 공부 블로그</h1>

                <div className="logIn">
                    <a>로그인</a>
                </div>
            </div>
            <div className="contents">
                <div className="aside">
                    <div className="userInfo">
                        {logInMessage}
                    </div>
                    <div className="mainMenu"></div>
                </div>

                <div className="section"></div>
            </div>
        </div>
    );
}

export default Blog;