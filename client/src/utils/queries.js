import { gql } from '@apollo/client';

export const GET_USER_POSTS_QUERY = gql`
  query GetUserPosts($userId: ID!) {
    getUserPosts(userId: $userId) {
      id
      content
      createdAt
    }
  }
`;

export const GET_ALL_POSTS_QUERY = gql`
  query {
    getPosts {
      id
      content
      author {
        id
        username
      }
      createdAt
    }
  }
`;