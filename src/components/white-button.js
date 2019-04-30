import React from "react";

import "./white-button.css";

const WhiteButton = ({item}) => (
    <a href={item.url} className="white-button">
        {item.text}
    </a>
);

export default WhiteButton;