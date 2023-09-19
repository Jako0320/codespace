import React from 'react';
import Post from '../Post/Post';
import ProfileCard from '../ProfileCard/ProfileCard';
import Rightside from '../rightside/Rightside';
import SuggestedUsers from '../SuggestedUsers/SuggestedUsers';
import './SocialStyles.css';

const Social = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ProfileCard />
        <SuggestedUsers />
      </div>
      <Post />
      <Rightside />
    </div>
  )
}

export default Social;