import React from "react";
import "./white-button.css";

const WhiteButton = (props) => (
    <a href="/" className="white-button">
        {props.text}
    </a>
);

export default WhiteButton;