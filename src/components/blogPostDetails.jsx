import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/blogging.css"

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/blogs/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className='popPP'>
      <h1 style={{color:"#fff"}}>{post.title}</h1>
      <div style ={{color:"#fff"}} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetail;
