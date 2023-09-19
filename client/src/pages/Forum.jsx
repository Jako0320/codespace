import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS_QUERY } from '../utils/queries';
import Post from '../components/Post/Post';
import { useAuth  } from '../utils/AuthContext';

const Forum = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_QUERY);
  const { user } = useAuth();
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.getPosts;
  const toggleCreatePostForm = () => {
    setShowCreatePostForm(!showCreatePostForm);
  };

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
<div>
      <h1>All Posts</h1>
      <button onClick={toggleCreatePostForm}>Create New Post</button>
      {showCreatePostForm && <Post />}
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.content}</h2>
          <p>Author: {post.author.username}</p>
          <p>Created At: {formatDate(post.createdAt)}</p>
        </div>
      ))}
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      )}
    </div>
  );
};

export default Forum;