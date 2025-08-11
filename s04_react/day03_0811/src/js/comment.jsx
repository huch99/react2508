import { useState } from "react";

export default function Comment() {
    const [userName, setUserName] = useState('');
    const [userComment, setUserComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    return (
        <> 
            <div>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="이름"/>
                <input type="text" value={userComment} onChange={(e) => setUserComment(e.target.value)} placeholder="댓글" />
                <button onClick={() => {
                    if(userName !== '' && userComment !== '') {
                    setCommentList([...commentList, {userName, userComment}]);
                    setUserName('');
                    setUserComment('');
                }}}>추가</button>
            </div>

            <div>
                {commentList.map((comment, index) => (
                    <div className="commentBox" key={index}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
                        <div>
                        {comment.userName} <br/>
                        {comment.userComment}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}