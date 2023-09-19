import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_POSTS_QUERY } from "../utils/queries";
import { useAuth } from "../utils/AuthContext";

const UserPosts = () => {
  const { user } = useAuth();
  const { loading, error, data } = useQuery(GET_USER_POSTS_QUERY, {
    variables: { userId: user ? user.userId : null },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const userPosts = data.getUserPosts;

  return (
    <div>
      <h1>Your Posts</h1>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.content}</h2>
          <p>Created At: {post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
