import React from "react";
import "./footer.css";
import SocialMediaA from "./social-media-a";

const Footer = (props) => (
    <footer>
        <p className="smaller">COPYRIGHT &copy; 2003-2012 VENTUS INC. ALL RIGHTS RESERVED.</p>

        <div className="social-media-div">
            <SocialMediaA href="https://twitter.com/">
                <i className="fab fa-twitter-square"></i>
            </SocialMediaA>

            <SocialMediaA href="https://facebook.com/">
                <i className="fab fa-facebook-square"></i>
            </SocialMediaA>

            <SocialMediaA href="https://vimeo.com/">
                <i className="fab fa-vimeo-square"></i>
            </SocialMediaA>

            <SocialMediaA href="https://youtube.com/">
                <i className="fab fa-youtube-square"></i>
            </SocialMediaA>

            <SocialMediaA href="https://plus.google.com/">
                <i className="fab fa-google-plus-square"></i>
            </SocialMediaA>

            <SocialMediaA href="https://pinterest.com/">
                <i className="fab fa-pinterest-square"></i>
            </SocialMediaA>
        
        </div>
    </footer>
);

export default Footer;