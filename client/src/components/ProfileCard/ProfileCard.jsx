import React from 'react';
import './ProfileCardStyles.css';
import profileUserImg from '../../assets/profile1.jpg';


const ProfileCard = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="top">
                    <div className="imgContainer">
                        <img src={profileUserImg} className="profileUserImg" />
                    </div>
                    <div className="usernameAndCreatedAt">
                        <p><span>Username:</span> WebDevMania</p>
                        <p><span>Created At:</span> 14th of January 2023</p>
                    </div>
                </div>
                    <hr />
                <div className="bottom">
                    <p>Followers: <span>43123</span></p>
                    <p>Followings: <span>3274</span></p>
                </div>
            </div>
            <h3 className="myProfile">My profile</h3>
        </div>
    )
}

export default ProfileCard