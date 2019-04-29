import React from "react"
import "./blue-button.css"


const BlueButton = (props) => (
    <a href="/" className="blue-button">
        {props.text}
    </a>
);

export default BlueButton;