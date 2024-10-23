import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/newblog.css';

function Apy() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

    // Fetch blog posts from API
    useEffect(() => {
        axios.get('http://localhost:8080/api/post/getBlog')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    // Handle form inputs
    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };

    // Add a new post
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/post/postBlog', newPost)
            .then(() => {
                setNewPost({ title: '', content: '', author: '' });
                axios.get('http://localhost:8080/api/post/getBlog')
                    .then(response => setPosts(response.data));
            })
            .catch(error => console.error('Error adding post:', error));
    };

    return (
        <div className="App2">
            <h1>Adane Technology Blog</h1>

            <form className="post-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={newPost.content}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newPost.author}
                    onChange={handleChange}
                />
                <button type="submit">Add Post</button>
            </form>

            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <span>by {post.author} on {new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Apy;
