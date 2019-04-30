import React from "react";

import "./read-more-button.css";

const ReadMoreButton = ({item}) => (
    <a href={item.url} className="read-more-button">
        {item.text}
    </a>
);

export default ReadMoreButton;