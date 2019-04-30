import React from "react";

import "./blue-button.css";

const BlueButton = ({item}) => (
    <a href={item.url} className="blue-button">
        {item.text}
    </a>
);

export default BlueButton;