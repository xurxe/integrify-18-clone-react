import React from "react";
import Parser from "html-react-parser";

import "./footer.css";
import data from "../data";

import SocialMediaA from "./social-media-a";

const Footer = () => (
    <footer>
        <p>
            {Parser(data.footer.copyright)}
        </p>

        <div className="social-media-div">
            {data.footer.socialMedia.map(
                (item) => <SocialMediaA key={item.name} item={item}></SocialMediaA>
            )}
        </div>
    </footer>
);

export default Footer;