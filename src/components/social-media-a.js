import React from "react";
import Parser from "html-react-parser";

import "./social-media-a.css";

const SocialMediaA = ({item}) => (
    <a className="social-media-a" href={item.url}>
        {Parser(item.img)}
    </a>
);

export default SocialMediaA;