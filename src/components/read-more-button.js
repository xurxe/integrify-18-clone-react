import React from "react";

import "./read-more-button.css";

const ReadMoreButton = ({data}) => (
    <a href={data.url} className="read-more-button">
        {data.text}
    </a>
);

export default ReadMoreButton;