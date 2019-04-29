import React from "react";

import "./white-button.css";

const WhiteButton = ({data}) => (
    <a href={data.url} className="white-button">
        {data.text}
    </a>
);

export default WhiteButton;