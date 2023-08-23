import React, { useEffect, useState } from 'react';
import Text from './Text';

const Demo = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(re => re.json())
            .then(posts => {
                setPosts(posts);
            })
    },[])

    return (
        <div>
            <h1>Morning Danny. Have a nice day</h1>
            <button onClick={() => setShow(!show)}>Toggle</button>
            <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <ul>
            {posts.map(post => (
                <li key = {post.id}>{post.title}</li>
            ))}
            </ul>
        </div>
    );
};

export default Demo;