import { gql } from '@apollo/client';

export const GET_USER_POSTS_QUERY = gql`
  query GetUserPosts($userId: ID!) {
    getUserPosts(userId: $userId) {
      _id
      content
      createdAt
    }
  }
`;

export const GET_ALL_POSTS_QUERY = gql`
  query {
    getPosts {
      _id
      content
      author {
      _id
        username
      }
      createdAt
    }
  }
`;