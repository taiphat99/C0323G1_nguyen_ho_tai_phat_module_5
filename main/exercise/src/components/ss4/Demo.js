import React, { useEffect, useState } from 'react';
import Text from './Text';


const tabs = ['posts', 'comments', 'albums'];

const Demo = () => {

    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    console.log('outside Effect')

    useEffect(() => {
        console.log('inside Effect');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

    },[])

    return (
        <div>
            
            <h1>Morning Danny. Have a nice day</h1>
            {
                tabs.map((tab) => (
                    <button style={type === tab ? { color: '#fff', background: '#333' } : {}}
                        key={tab} onClick={() => setType(tab)
                        }>{tab}</button>
                ))
            }
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (   
                <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go To Top</button>
            )}
        </div>
    );
};

export default Demo;