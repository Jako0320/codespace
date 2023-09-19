import React from 'react';
import  './SuggestedUsersStyles.css';
import profileUserImg from '../../assets/profile1.jpg';
import man from '../../assets/profile2.jpg';


const SuggestedUsers = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="myProfile">
                    <img src={profileUserImg} className="profileUserImg" alt="" />
                    <div className="profileData">
                        <span>WebDevMania</span>
                        <span className="shortBio">Live is full of adventures</span>
                    </div>
                </div>
                <div className="suggestedUsers">
                    <h3 className="title">Recommended users to Follow</h3>
                    <div className="suggestedUser">
                        <img src={man} className="imgUser" alt="" />
                        <div className="suggestedUserData">
                            <span>John Doe</span>
                            <span className="suggestedMsg">Suggested to you</span>
                        </div>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="suggestedUser">
                        <img src={man} className="imgUser" alt="" />
                        <div className="suggestedUserData">
                            <span>John Doe</span>
                            <span className="suggestedMsg">Suggested to you</span>
                        </div>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="suggestedUser">
                        <img src={man} className="imgUser" alt="" />
                        <div className="suggestedUserData">
                            <span>John Doe</span>
                            <span className="suggestedMsg">Suggested to you</span>
                        </div>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="suggestedUser">
                        <img src={man} className="imgUser" alt="" />
                        <div className="suggestedUserData">
                            <span>John Doe</span>
                            <span className="suggestedMsg">Suggested to you</span>
                        </div>
                        <button className="followBtn">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedUsers;