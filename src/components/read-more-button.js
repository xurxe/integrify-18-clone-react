import React from "react";

import "./read-more-button.css";

const ReadMoreButton = ({item}) => (
    <a 
    className="read-more-button"
    href={item.url}>

        {item.text}
        
    </a>
);

export default ReadMoreButton;