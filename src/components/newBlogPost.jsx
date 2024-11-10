import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/blogs/posts', { title, content })
      .then(res => navigate(`/post/${res.data.postId}`))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <ReactQuill value={content} onChange={setContent}  style={{color:"#fff"}}/>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default NewPost;
