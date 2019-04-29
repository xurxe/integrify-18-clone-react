import React from "react";

import "./blue-button.css";

const BlueButton = ({data}) => (
    <a href={data.url} className="blue-button">
        {data.text}
    </a>
);

export default BlueButton;