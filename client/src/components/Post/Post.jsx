import React from 'react';
import  './PostStyles.css';
import profileUserImg from '../../assets/profile1.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'


const Post = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="top">
              <div className="topLeft">
              <img src={profileUserImg} className="profileUserImg"/>
                <div className="profileMetadata">
                    <span>WebDevMania</span>
                    <span>3 hours ago</span>
                </div>
              </div>
             <HiOutlineDotsVertical size={25}/>
            </div>
            <div className="center">
                <div className="desc">My first post!</div>
                <img src={profileUserImg} className="postImg" />
            </div>
            <div className="controls">
                <div className="controlsLeft">
                    <AiOutlineHeart />
                    <BiMessageRounded />
                </div>
                <div className="controlsRight">
                    <BsBookmark />
                </div>
            </div>
            <div className="comments">
                <div className="comment">
                    <div className="commentLeft">
                      <img src={profileUserImg} className="commentImg"/>
                      <div className="commentData">
                        <span>WebDevMania</span>
                        <span className="commentTimeago">1 hour ago</span>
                      </div>
                      <div className="commentText">Nice post WebDevMania!</div>
                    </div>
                    <div className="commentRight">
                        <AiOutlineHeart />
                        <span>5 likes</span>
                    </div>
                </div>
                <div className="comment">
                    <div className="commentLeft">
                      <img src={profileUserImg} className="commentImg"/>
                      <div className="commentData">
                        <span>WebDevMania</span>
                        <span className="commentTimeago">1 hour ago</span>
                      </div>
                      <div className="commentText">Nice post WebDevMania!</div>
                    </div>
                    <div className="commentRight">
                        <AiOutlineHeart />
                        <span>5 likes</span>
                    </div>
                </div>
                <div className="comment">
                    <div className="commentLeft">
                      <img src={profileUserImg} className="commentImg"/>
                      <div className="commentData">
                        <span>WebDevMania</span>
                        <span className="commentTimeago">1 hour ago</span>
                      </div>
                      <div className="commentText">Nice post WebDevMania!</div>
                    </div>
                    <div className="commentRight">
                        <AiOutlineHeart />
                        <span>5 likes</span>
                    </div>
                </div>
            </div>
            <div className="postCommentSection">
                <input type="text" className="inputSection" placeholder='Type here...'/>
                <button>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Post;