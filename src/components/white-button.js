import React from "react";

import "./white-button.css";

const WhiteButton = ({item}) => (
    <a 
    className="white-button"
    href={item.url}>
    
        {item.text}
    </a>
);

export default WhiteButton;