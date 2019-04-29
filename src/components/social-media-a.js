import React from "react";
import "./social-media-a.css";

const SocialMediaA = (props) => (
    <a className="social-media-a" href={props.href}>
        {props.children}
    </a>
);

export default SocialMediaA;