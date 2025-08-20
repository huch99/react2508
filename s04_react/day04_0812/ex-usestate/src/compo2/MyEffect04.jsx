import React, { useEffect, useState } from 'react';

const MyEffect04 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {        
        // fetch API
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }, [])

    return (
        <div>
            <h1>게시글 목록</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}> {post.title} ~~ {post.body} </li>
                ))}
            </ul>
        </div>
    );
};

export default MyEffect04;