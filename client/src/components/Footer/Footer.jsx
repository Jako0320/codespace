import React from 'react';
import "./footerstyle.css";

const Footer = () => {
    return (
        <> < div className = "footer" > <div className="top">
            <div>
                <h1>codeSpace</h1>
                <p>Social Media App For Coders.</p>
            </div>
            <div>
                <a href="google.com">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="google.com">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="google.com">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="google.com">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Project</h4>

                <a href="google.com">Status</a>
                <a href="google.com">License</a>

            </div>
            <div>
                <h4>Community</h4>
                <a href="google.com">GitHub</a>
                <a href="google.com">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="google.com">Support</a>
                <a href="google.com">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="google.com">Terms of Service</a>
                <a href="google.com">Privacy Policy</a>
                <a href="google.com">License</a>
            </div>
        </div>
    </div>
</>
    );
};

export default Footer;
