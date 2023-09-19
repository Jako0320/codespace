import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST_MUTATION } from '../../utils/mutations';


const Post = () => {
  const [content, setContent] = useState('');
  const [createPost] = useMutation(CREATE_POST_MUTATION);

  const handlePostSubmit = async () => {
    try {
      const { data } = await createPost({
        variables: { content },
      });
    } catch (error) {
    }
  };

  return (

    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here..."
      />
      <button onClick={handlePostSubmit}>Submit</button>
    </div>
  );
};

export default Post;