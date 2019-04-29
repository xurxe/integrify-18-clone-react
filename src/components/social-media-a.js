import React from "react";
import Parser from "html-react-parser"

import "./social-media-a.css";

const SocialMediaA = ({data}) => (
    <a className="social-media-a" href={data.url}>
        {Parser(data.img)}
    </a>
);

export default SocialMediaA;